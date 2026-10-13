import React from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/Logo';
import { LayoutDashboard, FolderTree, Package, Image as ImageIcon, ExternalLink, LogOut } from 'lucide-react';

export default function AdminLayout() {
  const { logout, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const navItems = [
    { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Categories', path: '/admin/categories', icon: FolderTree },
    { label: 'Products', path: '/admin/products', icon: Package },
    { label: 'Media Library', path: '/admin/media', icon: ImageIcon }
  ];

  const isCurrentActive = (itemPath) => {
    if (itemPath === '/admin/dashboard') {
      return location.pathname === '/admin' || location.pathname === '/admin/dashboard';
    }
    return location.pathname.startsWith(itemPath);
  };

  return (
    <div className="admin-layout">
      {/* Dark Sidebar (Screen 6 & 7) */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <Logo size="small" linkTo="/admin/dashboard" />
        </div>

        <nav className="admin-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isCurrentActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`admin-nav-item ${active ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="admin-sidebar-footer">
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className="admin-nav-item"
            style={{ color: '#38BDF8', fontSize: '0.85rem' }}
          >
            <ExternalLink size={16} />
            <span>View Public Site</span>
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="admin-nav-item"
            style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer', color: '#F87171' }}
          >
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Admin Area */}
      <div className="admin-main">
        <Outlet />
      </div>
    </div>
  );
}
