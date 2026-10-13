import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import Breadcrumb from '../components/Breadcrumb';
import { ArrowLeft, PackageOpen } from 'lucide-react';

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const { getCategoryBySlug, getProductsByCategory, categories } = useProducts();

  const currentCategory = getCategoryBySlug(categorySlug) || categories[0];
  const products = getProductsByCategory(currentCategory?.id || currentCategory?.slug);
  const publishedProducts = products.filter(p => p.status === 'published');

  const bannerImage = currentCategory?.bannerImage || currentCategory?.image || '/images/cooking_oils_banner.jpg';

  return (
    <div className="category-page-wrapper">
      {/* Screen 2: Top Hero Banner with Background Image */}
      <section
        className="category-banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="category-banner-overlay" />
        <div className="site-container">
          <div className="category-banner-content">
            <Breadcrumb
              items={[
                { label: currentCategory?.name || 'Category' }
              ]}
            />
            <h1 className="category-banner-title">{currentCategory?.name}</h1>
            <p className="category-banner-desc">
              {currentCategory?.description || 'Explore our authentic, unadulterated range.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="site-container" style={{ paddingBottom: '70px' }}>
        {/* Category Tabs / Switcher */}
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '16px', marginBottom: '32px' }}>
          {categories.map(cat => {
            const isCurrent = (cat.slug === currentCategory?.slug || cat.id === currentCategory?.id);
            return (
              <Link
                key={cat.id}
                to={`/category/${cat.slug || cat.id}`}
                className="btn btn-sm"
                style={{
                  background: isCurrent ? 'var(--primary)' : '#FFFFFF',
                  color: isCurrent ? '#FFFFFF' : 'var(--text-body)',
                  borderColor: isCurrent ? 'var(--primary)' : 'var(--border)',
                  whiteSpace: 'nowrap'
                }}
              >
                {cat.name}
              </Link>
            );
          })}
        </div>

        {/* Product Grid (Screen 2: 3-column / 2-column) */}
        {publishedProducts.length > 0 ? (
          <div className="product-grid">
            {publishedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid var(--border)' }}>
            <PackageOpen size={48} color="var(--text-subtle)" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>No Products Available</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
              Products in this category are being updated in our catalog.
            </p>
            <Link to="/products" className="btn btn-secondary">
              <ArrowLeft size={16} /> Browse All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
