import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Sparkles, Award, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  const { categories, publishedProducts } = useProducts();

  const featuredProducts = publishedProducts.filter(p => p.featured).slice(0, 4);

  return (
    <div className="homepage-wrapper">
      {/* 1. Hero Section (Screen 1 & Screen 4) */}
      <section className="hero-section">
        <div className="site-container">
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-content">
              <h1 className="hero-title">
                Pure Spices <br />
                for a Better <br />
                Everyday
              </h1>
              <p className="hero-subtitle">
                Authentic. Fresh. Made for Your Kitchen.
              </p>
              <a href="#categories" className="hero-cta">
                <span>Explore Our Products</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Right Hero Image */}
            <div className="hero-image-card">
              <img
                src="/images/spice_hero_banner.jpg"
                alt="Ponnis Authentic Spice Powders and Spices"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product Categories Section (Screen 1 & Screen 4) */}
      <section id="categories" style={{ padding: '40px 0 60px' }}>
        <div className="site-container">
          <div className="section-header">
            <h2 className="section-title">Our Product Categories</h2>
            <p className="section-subtitle">
              Explore our range of quality spices, oils and grocery products.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Showcase */}
      {featuredProducts.length > 0 && (
        <section style={{ padding: '40px 0 60px', background: 'var(--cream-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="site-container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
              <div>
                <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Signature Ponnis Favorites</h2>
                <p className="section-subtitle">Cold-pressed pure cooking oils and freshly ground spice powders.</p>
              </div>
              <Link to="/products" className="btn btn-secondary btn-sm" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                View All <ArrowRight size={15} />
              </Link>
            </div>

            <div className="product-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Brand Trust Pillars */}
      <section style={{ padding: '60px 0 40px' }}>
        <div className="site-container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>The Ponnis Promise of Purity</h2>
            <p className="section-subtitle">Delivering authentic aromas and unadulterated freshness to families across Malaysia.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Award size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>Stone Ground & Cold Pressed</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                Retaining delicate volatile oils, natural antioxidants, and authentic fragrances through gentle traditional extraction.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--gold-light)', color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>Zero Artificial Additives</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                100% natural spices, powders, and pure oils with no chemical colorants, synthetic aromas, or artificial fillers.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#DCFCE7', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <HeartHandshake size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>Malaysian Kitchen Heritage</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                Trusted by thousands of Malaysian households, caterers, and traditional cooks for that authentic homemade flavor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
