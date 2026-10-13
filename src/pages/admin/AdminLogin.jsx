import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Logo from '../../components/Logo';
import { User, Lock, AlertCircle, ArrowLeft } from 'lucide-react';

export default function AdminLogin() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const res = await login(username, password);
    setSubmitting(false);

    if (res.success) {
      navigate('/admin/dashboard');
    } else {
      setError(res.error || 'Invalid credentials');
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-backdrop" />

      {/* Screen 5: Floating Card */}
      <div className="admin-login-card">
        <div className="admin-login-logo">
          <Logo size="medium" linkTo="" />
        </div>

        <h1 className="admin-login-title">Admin Portal</h1>
        <p className="admin-login-sub">Login to manage products</p>

        {error && (
          <div style={{ width: '100%', padding: '10px 14px', background: '#FEE2E2', border: '1px solid #FCA5A5', color: '#B91C1C', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="admin-form">
          <div className="input-group">
            <span className="input-icon">
              <User size={18} />
            </span>
            <input
              type="text"
              className="admin-input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <span className="input-icon">
              <Lock size={18} />
            </span>
            <input
              type="password"
              className="admin-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="admin-btn-login"
            disabled={submitting}
          >
            {submitting ? 'Signing in...' : 'Login'}
          </button>
        </form>

        <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border)', width: '100%', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          <p>Demo Login: <strong>admin</strong> / <strong>admin123</strong></p>
          <div style={{ marginTop: '12px' }}>
            <a href="/" style={{ color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <ArrowLeft size={14} /> Back to Catalog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
