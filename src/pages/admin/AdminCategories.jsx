import React, { useState } from 'react';
import { useProducts } from '../../context/ProductContext';
import { Plus, Edit2, Trash2, FolderPlus, Check, X } from 'lucide-react';

export default function AdminCategories() {
  const { categories, addCategory, updateCategory, deleteCategory, products } = useProducts();
  const [editingCat, setEditingCat] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [formName, setFormName] = useState('');
  const [formDesc, setFormDesc] = useState('');
  const [formImg, setFormImg] = useState('');

  const openAddModal = () => {
    setEditingCat(null);
    setFormName('');
    setFormDesc('');
    setFormImg('/images/spices_powders.jpg');
    setShowModal(true);
  };

  const openEditModal = (cat) => {
    setEditingCat(cat);
    setFormName(cat.name);
    setFormDesc(cat.description || '');
    setFormImg(cat.image || '');
    setShowModal(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!formName.trim()) return;

    if (editingCat) {
      updateCategory(editingCat.id, {
        name: formName.trim(),
        description: formDesc.trim(),
        image: formImg.trim()
      });
    } else {
      addCategory({
        name: formName.trim(),
        description: formDesc.trim(),
        image: formImg.trim()
      });
    }
    setShowModal(false);
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to remove category "${name}"?`)) {
      deleteCategory(id);
    }
  };

  return (
    <>
      <div className="admin-topbar">
        <h1 className="admin-topbar-title">Category Management</h1>
        <button
          type="button"
          onClick={openAddModal}
          className="btn btn-sm"
          style={{ background: '#0F172A', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Plus size={16} /> Add Category
        </button>
      </div>

      <div className="admin-content-area">
        <div className="admin-card">
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th style={{ width: '80px' }}>Image</th>
                  <th>Category Name</th>
                  <th>Description</th>
                  <th>Products</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => {
                  const prodCount = products.filter(p => p.categoryId === cat.id || p.categoryId === cat.slug).length;
                  return (
                    <tr key={cat.id}>
                      <td>
                        <img
                          src={cat.image || '/images/spices_powders.jpg'}
                          alt={cat.name}
                          className="table-thumb"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/images/spices_powders.jpg';
                          }}
                        />
                      </td>
                      <td>
                        <div style={{ fontWeight: 600, color: '#0F172A' }}>{cat.name}</div>
                        <div style={{ fontSize: '0.78rem', color: '#64748B' }}>slug: {cat.slug || cat.id}</div>
                      </td>
                      <td style={{ color: '#475569', fontSize: '0.88rem', maxWidth: '300px' }}>
                        {cat.description || '—'}
                      </td>
                      <td>
                        <span style={{ fontSize: '0.85rem', color: '#475569', background: '#F1F5F9', padding: '4px 10px', borderRadius: '6px' }}>
                          {prodCount} products
                        </span>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <div style={{ display: 'inline-flex', gap: '8px' }}>
                          <button
                            type="button"
                            onClick={() => openEditModal(cat)}
                            className="btn btn-secondary btn-sm"
                            style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                          >
                            <Edit2 size={13} /> Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(cat.id, cat.name)}
                            className="btn btn-ghost btn-icon"
                            style={{ color: '#DC2626' }}
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal for Add / Edit */}
        {showModal && (
          <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999,
            padding: '20px'
          }}>
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              maxWidth: '500px',
              width: '100%',
              padding: '28px',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                  {editingCat ? 'Edit Category' : 'Add New Category'}
                </h3>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSave}>
                <div className="form-group">
                  <label className="form-label">Category Name</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Description</label>
                  <textarea
                    rows={3}
                    className="form-textarea"
                    value={formDesc}
                    onChange={(e) => setFormDesc(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Image Path or URL</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formImg}
                    onChange={(e) => setFormImg(e.target.value)}
                  />
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: '24px', justifyContent: 'flex-end' }}>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-success"
                  >
                    Save Category
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
