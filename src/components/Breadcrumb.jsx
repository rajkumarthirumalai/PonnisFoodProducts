import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <span className="breadcrumb-separator">
              <ChevronRight size={14} />
            </span>
            {isLast || !item.path ? (
              <span className="breadcrumb-active">{item.label}</span>
            ) : (
              <Link to={item.path}>{item.label}</Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
