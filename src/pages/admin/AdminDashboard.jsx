import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProducts } from '../../context/ProductContext';
import { Plus, Edit2, MoreVertical, CheckCircle2, Trash2 } from 'lucide-react';

export default function AdminDashboard() {
  const { categories, products, deleteProduct } = useProducts();
  const navigate = useNavigate();
  const [activeMenuId, setActiveMenuId] = useState(null);

  const publishedCount = products.filter(p => p.status === 'published').length;
  const draftCount = products.filter(p => p.status === 'draft').length;

  const recentProducts = products.slice(0, 5);

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to remove "${name}"?`)) {
      deleteProduct(id);
      setActiveMenuId(null);
    }
  };

  return (
    <>
      <div className="admin-topbar">
        <h1 className="admin-topbar-title">Dashboard</h1>
        <Link to="/admin/products/new" className="btn btn-sm" style={{ background: '#0F172A', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Plus size={16} /> Add Product
        </Link>
      </div>

      <div className="admin-content-area">
        {/* Screen 6: 4 Stat Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-num">{categories.length || 12}</span>
            <span className="stat-label">Categories</span>
          </div>

          <div className="stat-card">
            <span className="stat-num">{products.length}</span>
            <span className="stat-label">Products</span>
          </div>

          <div className="stat-card">
            <span className="stat-num">{draftCount}</span>
            <span className="stat-label">Drafts</span>
          </div>

          <div className="stat-card">
            <span className="stat-num">0</span>
            <span className="stat-label">Hidden</span>
          </div>
        </div>

        {/* Screen 6: Recent Products Card & Table */}
        <div className="admin-card">
          <div className="admin-card-header">
            <h2 className="admin-card-title">Recent Products</h2>
            <Link to="/admin/products/new" className="btn btn-sm" style={{ background: '#0F172A', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Plus size={14} /> Add Product
            </Link>
          </div>

          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th style={{ width: '80px' }}>Image</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {recentProducts.map((prod) => {
                  const thumb = prod.primaryImage || (prod.images && prod.images[0]) || '/images/groundnut_oil_feature.jpg';
                  const isPublished = prod.status === 'published';
                  const category = categories.find(c => c.id === prod.categoryId || c.slug === prod.categoryId);

                  return (
                    <tr key={prod.id}>
                      <td>
                        <img
                          src={thumb}
                          alt={prod.name}
                          className="table-thumb"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/images/groundnut_oil_feature.jpg';
                          }}
                        />
                      </td>
                      <td>
                        <div style={{ fontWeight: 600, color: '#0F172A' }}>{prod.name}</div>
                        <div style={{ fontSize: '0.78rem', color: '#64748B' }}>{prod.lastUpdated || 'Updated recently'}</div>
                      </td>
                      <td>
                        <span style={{ color: '#475569', fontWeight: 500 }}>
                          {category?.name || prod.categoryName || 'General'}
                        </span>
                      </td>
                      <td>
                        <span className={`status-badge ${isPublished ? 'published' : 'draft'}`}>
                          <CheckCircle2 size={12} />
                          <span>{isPublished ? 'Published' : 'Draft'}</span>
                        </span>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', position: 'relative' }}>
                          <button
                            type="button"
                            onClick={() => navigate(`/admin/products/edit/${prod.id}`)}
                            className="btn btn-secondary btn-sm"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '5px 10px', fontSize: '0.82rem' }}
                          >
                            <Edit2 size={13} />
                            <span>Edit</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setActiveMenuId(activeMenuId === prod.id ? null : prod.id)}
                            className="btn btn-ghost btn-icon"
                            style={{ width: '32px', height: '32px' }}
                            aria-label="More actions"
                          >
                            <MoreVertical size={16} />
                          </button>

                          {activeMenuId === prod.id && (
                            <div style={{
                              position: 'absolute',
                              right: 0,
                              top: '100%',
                              background: '#FFFFFF',
                              borderRadius: '8px',
                              boxShadow: 'var(--shadow-md)',
                              border: '1px solid var(--border)',
                              zIndex: 10,
                              minWidth: '130px',
                              padding: '4px 0'
                            }}>
                              <button
                                type="button"
                                onClick={() => handleDelete(prod.id, prod.name)}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '8px',
                                  width: '100%',
                                  padding: '8px 14px',
                                  color: '#DC2626',
                                  background: 'none',
                                  border: 'none',
                                  cursor: 'pointer',
                                  fontSize: '0.85rem'
                                }}
                              >
                                <Trash2 size={14} /> Remove
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
