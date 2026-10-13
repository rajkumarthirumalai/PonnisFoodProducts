import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import Breadcrumb from '../components/Breadcrumb';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function ProductsPage() {
  const { categories, publishedProducts } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = publishedProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.categoryId === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (product.shortDescription && product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="site-container" style={{ padding: '36px 20px 80px' }}>
      <Breadcrumb items={[{ label: 'All Products' }]} />

      <div style={{ margin: '24px 0 36px' }}>
        <h1 className="section-title" style={{ fontSize: '2.5rem' }}>Our Complete Product Range</h1>
        <p className="section-subtitle">
          Discover genuine spices, cold-pressed oils, grains, and traditional culinary mixes.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
        {/* Category Pills Filter */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
          <button
            type="button"
            className="btn btn-sm"
            onClick={() => setSelectedCategory('all')}
            style={{
              background: selectedCategory === 'all' ? 'var(--primary)' : '#FFFFFF',
              color: selectedCategory === 'all' ? '#FFFFFF' : 'var(--text-body)',
              borderColor: selectedCategory === 'all' ? 'var(--primary)' : 'var(--border)',
              borderRadius: '9999px',
              padding: '8px 18px',
              fontWeight: 600
            }}
          >
            All Products ({publishedProducts.length})
          </button>
          {categories.map(cat => {
            const count = publishedProducts.filter(p => p.categoryId === cat.id || p.categoryId === cat.slug).length;
            const isSelected = selectedCategory === cat.id || selectedCategory === cat.slug;
            return (
              <button
                key={cat.id}
                type="button"
                className="btn btn-sm"
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  background: isSelected ? 'var(--primary)' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : 'var(--text-body)',
                  borderColor: isSelected ? 'var(--primary)' : 'var(--border)',
                  borderRadius: '9999px',
                  padding: '8px 18px',
                  fontWeight: 600,
                  whiteSpace: 'nowrap'
                }}
              >
                {cat.name} {count > 0 && `(${count})`}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="product-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '60px 20px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid var(--border)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>No products found matching your selection.</p>
          <button
            type="button"
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="btn btn-secondary btn-sm"
            style={{ marginTop: '16px' }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
