import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('ponnis_admin_authenticated') === 'true';
  });
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('ponnis_admin_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isSupabaseConfigured && supabase) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session) {
          setIsAuthenticated(true);
          setUser({ email: session.user.email, name: 'Admin' });
        }
      });

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session) {
          setIsAuthenticated(true);
          setUser({ email: session.user.email, name: 'Admin' });
          localStorage.setItem('ponnis_admin_authenticated', 'true');
        } else {
          // preserve demo login if non-supabase
        }
      });

      return () => subscription.unsubscribe();
    }
  }, []);

  const login = async (usernameOrEmail, password) => {
    setLoading(true);
    try {
      if (isSupabaseConfigured && supabase) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: usernameOrEmail,
          password
        });
        if (error) throw error;
        setIsAuthenticated(true);
        setUser({ email: data.user.email, name: 'Admin' });
        localStorage.setItem('ponnis_admin_authenticated', 'true');
        localStorage.setItem('ponnis_admin_user', JSON.stringify({ email: data.user.email, name: 'Admin' }));
        return { success: true };
      }

      // Demo login for prototype / development
      if (
        (usernameOrEmail.trim().toLowerCase() === 'admin' || usernameOrEmail.includes('@')) &&
        password.length >= 4
      ) {
        const adminUser = {
          name: 'Ponnis Admin',
          username: usernameOrEmail,
          email: usernameOrEmail.includes('@') ? usernameOrEmail : 'admin@ponnismasala.com'
        };
        setIsAuthenticated(true);
        setUser(adminUser);
        localStorage.setItem('ponnis_admin_authenticated', 'true');
        localStorage.setItem('ponnis_admin_user', JSON.stringify(adminUser));
        return { success: true };
      } else {
        return { success: false, error: 'Please enter valid credentials (e.g. admin / admin123)' };
      }
    } catch (err) {
      return { success: false, error: err.message || 'Login failed' };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    if (isSupabaseConfigured && supabase) {
      await supabase.auth.signOut();
    }
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('ponnis_admin_authenticated');
    localStorage.removeItem('ponnis_admin_user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
