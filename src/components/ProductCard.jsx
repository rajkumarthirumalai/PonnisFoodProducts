import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product }) {
  const image = product.primaryImage || (product.images && product.images[0]) || '/images/groundnut_oil_feature.jpg';

  return (
    <Link to={`/product/${product.slug || product.id}`} className="product-card">
      <div className="product-card-img-wrap">
        <img
          src={image}
          alt={product.name}
          className="product-card-img"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/groundnut_oil_feature.jpg';
          }}
        />
      </div>
      <div className="product-card-body">
        <span className="product-card-name">{product.name}</span>
        <div className="product-card-arrow">
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}
