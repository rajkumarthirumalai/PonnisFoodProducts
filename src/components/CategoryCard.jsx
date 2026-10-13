import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category.slug || category.id}`} className="category-card">
      <div className="category-img-wrap">
        <img
          src={category.image || '/images/spices_powders.jpg'}
          alt={category.name}
          className="category-card-img"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/spices_powders.jpg';
          }}
        />
      </div>
      <div className="category-info">
        <span className="category-name">{category.name}</span>
        <div className="category-arrow-icon">
          <ArrowRight size={15} />
        </div>
      </div>
    </Link>
  );
}
