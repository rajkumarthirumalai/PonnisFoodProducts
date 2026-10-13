import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useProducts } from '../../context/ProductContext';
import { Plus, Trash2, Upload, ArrowLeft, Image as ImageIcon, Check } from 'lucide-react';

export default function AdminProductForm() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { products, categories, addProduct, updateProduct } = useProducts();

  const isEditing = Boolean(productId);
  const existingProduct = products.find(p => p.id === productId);

  const [formData, setFormData] = useState({
    name: '',
    categoryId: categories[0]?.id || 'cooking-oils',
    description: '',
    shortDescription: '',
    status: 'published',
    primaryImage: '/images/groundnut_oil_feature.jpg',
    images: ['/images/groundnut_oil_feature.jpg'],
    sizes: [
      { size: '100 ml', image: '/images/groundnut_oil_feature.jpg' },
      { size: '200 ml', image: '/images/groundnut_oil_feature.jpg' },
      { size: '500 ml', image: '/images/groundnut_oil_feature.jpg' },
      { size: '1 Litre', image: '/images/groundnut_oil_feature.jpg' }
    ]
  });

  const [newSizeInput, setNewSizeInput] = useState('');
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [showAddImageModal, setShowAddImageModal] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (isEditing && existingProduct) {
      setFormData({
        name: existingProduct.name || '',
        categoryId: existingProduct.categoryId || categories[0]?.id,
        description: existingProduct.description || existingProduct.shortDescription || '',
        shortDescription: existingProduct.shortDescription || '',
        status: existingProduct.status || 'published',
        primaryImage: existingProduct.primaryImage || (existingProduct.images && existingProduct.images[0]) || '/images/groundnut_oil_feature.jpg',
        images: existingProduct.images || [existingProduct.primaryImage || '/images/groundnut_oil_feature.jpg'],
        sizes: existingProduct.sizes || [
          { size: '100 ml' },
          { size: '200 ml' },
          { size: '500 ml' },
          { size: '1 Litre' }
        ]
      });
    }
  }, [isEditing, existingProduct, categories]);

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddSize = () => {
    if (!newSizeInput.trim()) return;
    setFormData(prev => ({
      ...prev,
      sizes: [...prev.sizes, { size: newSizeInput.trim(), image: prev.primaryImage }]
    }));
    setNewSizeInput('');
  };

  const handleRemoveSize = (index) => {
    setFormData(prev => ({
      ...prev,
      sizes: prev.sizes.filter((_, i) => i !== index)
    }));
  };

  const handleAddImage = (imgUrl) => {
    const url = imgUrl || imageUrlInput.trim();
    if (!url) return;
    setFormData(prev => {
      const nextImages = [...prev.images, url];
      return {
        ...prev,
        images: nextImages,
        primaryImage: prev.primaryImage || url
      };
    });
    setImageUrlInput('');
    setShowAddImageModal(false);
  };

  const handleRemoveImage = (index) => {
    setFormData(prev => {
      const filtered = prev.images.filter((_, i) => i !== index);
      return {
        ...prev,
        images: filtered,
        primaryImage: filtered[0] || ''
      };
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Please enter a product name');
      return;
    }

    const payload = {
      ...formData,
      categoryName: categories.find(c => c.id === formData.categoryId)?.name || 'General',
      shortDescription: formData.shortDescription || formData.description
    };

    if (isEditing) {
      await updateProduct(productId, payload);
    } else {
      await addProduct(payload);
    }

    setSavedSuccess(true);
    setTimeout(() => {
      navigate('/admin/products');
    }, 800);
  };

  return (
    <>
      <div className="admin-topbar">
        <div>
          <div style={{ fontSize: '0.82rem', color: '#64748B', marginBottom: '4px' }}>
            <Link to="/admin/products" style={{ color: '#0284C7' }}>Products</Link> &gt; {isEditing ? 'Edit Product' : 'Add Product'}
          </div>
          <h1 className="admin-topbar-title">{isEditing ? `Edit: ${formData.name}` : 'Add New Product'}</h1>
        </div>
      </div>

      <div className="admin-content-area">
        {savedSuccess && (
          <div style={{ background: '#DCFCE7', border: '1px solid #86EFAC', color: '#15803D', padding: '14px 20px', borderRadius: '12px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Check size={18} />
            <strong>Product saved successfully! Redirecting...</strong>
          </div>
        )}

        <form onSubmit={handleSave}>
          {/* Screen 7: 2-Column Form Layout */}
          <div className="form-2col-layout">
            {/* Left Column: Details & Sizes */}
            <div className="admin-card" style={{ padding: '28px' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Product Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Groundnut Oil"
                  value={formData.name}
                  onChange={handleTextChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="categoryId">Category</label>
                <select
                  id="categoryId"
                  name="categoryId"
                  className="form-select"
                  value={formData.categoryId}
                  onChange={handleTextChange}
                >
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="form-textarea"
                  placeholder="Premium quality cooking oil, extracted from carefully selected peanuts..."
                  value={formData.description}
                  onChange={handleTextChange}
                />
              </div>

              {/* Package Sizes Table (Screen 7) */}
              <div className="package-sizes-box">
                <div className="package-sizes-header">
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1E293B' }}>Package Sizes</h3>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input
                      type="text"
                      placeholder="e.g. 100 ml or 500 g"
                      value={newSizeInput}
                      onChange={(e) => setNewSizeInput(e.target.value)}
                      style={{ padding: '5px 10px', fontSize: '0.85rem', border: '1px solid #CBD5E1', borderRadius: '6px' }}
                    />
                    <button
                      type="button"
                      onClick={handleAddSize}
                      className="btn btn-sm"
                      style={{ background: '#0F172A', color: '#FFFFFF', padding: '5px 12px' }}
                    >
                      <Plus size={14} /> Add Size
                    </button>
                  </div>
                </div>

                <table className="admin-table" style={{ background: '#FFFFFF', borderRadius: '8px' }}>
                  <thead>
                    <tr>
                      <th>Size (e.g. 100 ml)</th>
                      <th>Variant Image (Optional)</th>
                      <th style={{ textAlign: 'right' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.sizes.map((item, idx) => (
                      <tr key={idx}>
                        <td style={{ fontWeight: 600 }}>{item.size}</td>
                        <td>
                          <img
                            src={item.image || formData.primaryImage || '/images/groundnut_oil_feature.jpg'}
                            alt={item.size}
                            style={{ width: '32px', height: '32px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #E2E8F0' }}
                          />
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <button
                            type="button"
                            onClick={() => handleRemoveSize(idx)}
                            style={{ color: '#DC2626', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 500 }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                    {formData.sizes.length === 0 && (
                      <tr>
                        <td colSpan={3} style={{ textAlign: 'center', color: '#94A3B8', padding: '20px' }}>
                          No sizes added yet. Use "+ Add Size" above.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Action Buttons (Screen 7: Green Save Product, Gray Cancel) */}
              <div style={{ display: 'flex', gap: '14px', marginTop: '32px' }}>
                <button
                  type="submit"
                  className="btn btn-success"
                  style={{ minWidth: '130px' }}
                >
                  Save Product
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/admin/products')}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </div>

            {/* Right Column: Product Images (Screen 7) */}
            <div className="admin-card" style={{ padding: '28px', height: 'fit-content' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1E293B', marginBottom: '16px' }}>
                Product Images
              </h3>

              {/* Thumbnails Grid */}
              <div className="images-preview-grid">
                {formData.images.map((img, idx) => (
                  <div key={idx} className="img-preview-card">
                    <img
                      src={img}
                      alt={`Product preview ${idx + 1}`}
                      className="img-preview-thumb"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/groundnut_oil_feature.jpg';
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(idx)}
                      className="img-remove-btn"
                      title="Remove image"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              {/* Add Images Area (Screen 7) */}
              <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="text"
                    placeholder="Enter image URL or select below"
                    value={imageUrlInput}
                    onChange={(e) => setImageUrlInput(e.target.value)}
                    className="form-input"
                    style={{ fontSize: '0.85rem' }}
                  />
                  <button
                    type="button"
                    onClick={() => handleAddImage()}
                    className="btn btn-secondary btn-sm"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    <Plus size={14} /> Add
                  </button>
                </div>

                {/* Quick Presets / Stock Product Images */}
                <div style={{ marginTop: '8px', borderTop: '1px solid #E2E8F0', paddingTop: '12px' }}>
                  <span style={{ fontSize: '0.8rem', color: '#64748B', display: 'block', marginBottom: '8px' }}>
                    Quick Select Mock Images:
                  </span>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {[
                      { name: 'Groundnut Oil', path: '/images/groundnut_oil_feature.jpg' },
                      { name: 'Cooking Oils', path: '/images/cooking_oils.jpg' },
                      { name: 'Sesame Oil', path: '/images/sesame_oil.jpg' },
                      { name: 'Spices', path: '/images/spices_powders.jpg' },
                      { name: 'Masalas', path: '/images/blended_masalas.jpg' }
                    ].map(preset => (
                      <button
                        key={preset.path}
                        type="button"
                        onClick={() => handleAddImage(preset.path)}
                        style={{
                          fontSize: '0.78rem',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          border: '1px solid #CBD5E1',
                          background: '#F8FAFC',
                          cursor: 'pointer'
                        }}
                      >
                        + {preset.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
