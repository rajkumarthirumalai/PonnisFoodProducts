import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProducts } from '../../context/ProductContext';
import { Plus, Edit2, Trash2, Search, CheckCircle2, Eye, ExternalLink } from 'lucide-react';

export default function AdminProducts() {
  const { products, categories, deleteProduct, updateProduct } = useProducts();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCat === 'all' || p.categoryId === selectedCat;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      deleteProduct(id);
    }
  };

  const handleToggleStatus = (prod) => {
    const nextStatus = prod.status === 'published' ? 'draft' : 'published';
    updateProduct(prod.id, { status: nextStatus });
  };

  return (
    <>
      <div className="admin-topbar">
        <h1 className="admin-topbar-title">Product Management</h1>
        <Link to="/admin/products/new" className="btn btn-sm" style={{ background: '#0F172A', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Plus size={16} /> Add Product
        </Link>
      </div>

      <div className="admin-content-area">
        {/* Filters */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '12px', flex: 1, minWidth: '280px' }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '36px' }}
              />
              <Search size={16} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            </div>

            <select
              value={selectedCat}
              onChange={(e) => setSelectedCat(e.target.value)}
              className="form-select"
              style={{ width: '200px' }}
            >
              <option value="all">All Categories</option>
              {categories.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Table */}
        <div className="admin-card">
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th style={{ width: '80px' }}>Thumbnail</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Variants / Sizes</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((prod) => {
                  const thumb = prod.primaryImage || (prod.images && prod.images[0]) || '/images/groundnut_oil_feature.jpg';
                  const cat = categories.find(c => c.id === prod.categoryId || c.slug === prod.categoryId);
                  const isPublished = prod.status === 'published';
                  const sizesCount = prod.sizes ? prod.sizes.length : 0;

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
                        <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
                          Updated: {prod.lastUpdated || 'Recently'}
                        </div>
                      </td>
                      <td>{cat?.name || prod.categoryName || 'General'}</td>
                      <td>
                        <span style={{ fontSize: '0.85rem', color: '#475569', background: '#F1F5F9', padding: '4px 10px', borderRadius: '6px' }}>
                          {sizesCount} size{sizesCount !== 1 ? 's' : ''}
                        </span>
                      </td>
                      <td>
                        <button
                          type="button"
                          onClick={() => handleToggleStatus(prod)}
                          title="Click to toggle status"
                          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                          <span className={`status-badge ${isPublished ? 'published' : 'draft'}`}>
                            <CheckCircle2 size={12} />
                            <span>{isPublished ? 'Published' : 'Draft'}</span>
                          </span>
                        </button>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <div style={{ display: 'inline-flex', gap: '8px' }}>
                          <Link
                            to={`/product/${prod.slug || prod.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost btn-icon"
                            title="Preview product on public catalog"
                          >
                            <ExternalLink size={15} />
                          </Link>

                          <button
                            type="button"
                            onClick={() => navigate(`/admin/products/edit/${prod.id}`)}
                            className="btn btn-secondary btn-sm"
                            style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                          >
                            <Edit2 size={13} /> Edit
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDelete(prod.id, prod.name)}
                            className="btn btn-ghost btn-icon"
                            style={{ color: '#DC2626' }}
                            title="Delete product"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}

                {filteredProducts.length === 0 && (
                  <tr>
                    <td colSpan={6} style={{ textAlign: 'center', padding: '40px', color: '#94A3B8' }}>
                      No products found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
