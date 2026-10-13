import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import Breadcrumb from '../components/Breadcrumb';
import { Store, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ProductDetailPage() {
  const { productSlug } = useParams();
  const { getProductBySlug, getCategoryBySlug, getProductsByCategory, products } = useProducts();

  const product = getProductBySlug(productSlug) || products[0];
  const category = getCategoryBySlug(product?.categoryId);

  // Gallery images
  const allImages = (product?.images && product.images.length > 0)
    ? product.images
    : [product?.primaryImage || '/images/groundnut_oil_feature.jpg'];

  const [selectedImage, setSelectedImage] = useState(allImages[0]);
  const [selectedSize, setSelectedSize] = useState(
    product?.sizes && product.sizes.length > 0 ? product.sizes[0].size : '1 Litre'
  );

  // When product slug changes, update state
  useEffect(() => {
    if (product) {
      const imgs = (product.images && product.images.length > 0)
        ? product.images
        : [product.primaryImage || '/images/groundnut_oil_feature.jpg'];
      setSelectedImage(imgs[0]);
      if (product.sizes && product.sizes.length > 0) {
        setSelectedSize(product.sizes[0].size);
      }
    }
  }, [productSlug, product]);

  if (!product) {
    return (
      <div className="site-container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2>Product Not Found</h2>
        <p style={{ margin: '16px 0 24px', color: 'var(--text-muted)' }}>The product you are looking for does not exist in our catalog.</p>
        <Link to="/products" className="btn btn-primary">Browse All Products</Link>
      </div>
    );
  }

  // Related products from same category, excluding current
  const relatedProducts = getProductsByCategory(product.categoryId)
    .filter(p => p.id !== product.id && p.status === 'published')
    .slice(0, 4);

  const handleSizeClick = (variant) => {
    setSelectedSize(variant.size);
    if (variant.image) {
      setSelectedImage(variant.image);
    }
  };

  const availableSizesText = (product.sizes || []).map(s => s.size).join(', ') || 'Standard Packaging';

  return (
    <div className="product-detail-wrapper" style={{ padding: '32px 0 80px' }}>
      <div className="site-container">
        {/* Breadcrumb Navigation (Screen 3) */}
        <Breadcrumb
          items={[
            { label: category?.name || 'Catalog', path: `/category/${category?.slug || product.categoryId}` },
            { label: product.name }
          ]}
        />

        {/* Screen 3: Main Product Display */}
        <div className="product-detail-layout">
          {/* Gallery: Thumbnail strip on left + Large featured image in center */}
          <div className="product-gallery-container">
            {allImages.length > 1 && (
              <div className="thumbnail-strip">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`thumbnail-btn ${selectedImage === img ? 'active' : ''}`}
                    onClick={() => setSelectedImage(img)}
                    aria-label={`Thumbnail ${idx + 1}`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} thumb ${idx + 1}`}
                      className="thumbnail-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/groundnut_oil_feature.jpg';
                      }}
                    />
                  </button>
                ))}
              </div>
            )}

            <div className="main-image-display">
              <img
                src={selectedImage}
                alt={product.name}
                className="main-product-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/groundnut_oil_feature.jpg';
                }}
              />
            </div>
          </div>

          {/* Right: Product Info & Size Selector (Screen 3) */}
          <div className="product-info-panel">
            <h1 className="product-detail-title">{product.name}</h1>
            <p className="product-detail-desc">
              {product.shortDescription || product.description}
            </p>

            {/* Available Sizes Section */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="size-selector-section">
                <div className="selector-label">Available Sizes</div>
                <div className="size-pills-wrap">
                  {product.sizes.map((item, index) => {
                    const isSelected = selectedSize === item.size;
                    return (
                      <button
                        key={index}
                        type="button"
                        className={`size-pill ${isSelected ? 'active' : ''}`}
                        onClick={() => handleSizeClick(item)}
                      >
                        {item.size}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Product Details Key-Value Table (Screen 3) */}
            <div className="product-details-card">
              <h3 className="details-card-title">Product Details</h3>
              <div className="details-row">
                <span className="details-row-label">Product Name</span>
                <span className="details-row-val">{product.name}</span>
              </div>
              <div className="details-row">
                <span className="details-row-label">Category</span>
                <span className="details-row-val">{category?.name || 'Food Products'}</span>
              </div>
              <div className="details-row">
                <span className="details-row-label">Description</span>
                <span className="details-row-val" style={{ fontWeight: 400 }}>
                  {product.description || product.shortDescription}
                </span>
              </div>
              <div className="details-row">
                <span className="details-row-label">Available Sizes</span>
                <span className="details-row-val">{availableSizesText}</span>
              </div>
            </div>

            {/* In-Store Availability Notice (No Cart / Checkout as requested) */}
            <div className="product-retail-badge">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Store size={20} color="var(--gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Available at In-Person Retailers</strong>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    Ponnis products are stocked in local Malaysian Indian grocers, spice markets, and supermarkets. Check your local retail grocer for current inventory.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More Products in [Category] Section (Screen 3) */}
        {relatedProducts.length > 0 && (
          <section style={{ marginTop: '72px', borderTop: '1px solid var(--border)', paddingTop: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
              <h2 className="section-title" style={{ fontSize: '1.7rem' }}>
                More Products in {category?.name || 'This Category'}
              </h2>
              {category && (
                <Link to={`/category/${category.slug || category.id}`} className="btn btn-secondary btn-sm" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  View Category <ArrowLeft size={14} style={{ transform: 'rotate(180deg)' }} />
                </Link>
              )}
            </div>

            <div className="product-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))' }}>
              {relatedProducts.map((relProd) => (
                <ProductCard key={relProd.id} product={relProd} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
