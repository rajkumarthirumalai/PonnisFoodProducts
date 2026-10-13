import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ size = 'medium', variant = 'default', linkTo = '/' }) {
  const heights = {
    small: '38px',
    medium: '52px',
    large: '72px'
  };

  const imgHeight = heights[size] || heights.medium;

  const content = (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
      <img
        src="/favicon.jpeg"
        alt="Ponnis Masala"
        style={{
          height: imgHeight,
          width: 'auto',
          maxWidth: '180px',
          objectFit: 'contain',
          display: 'block',
          transition: 'transform 0.2s ease'
        }}
      />
      {variant === 'with-text' && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.2rem', color: '#881313', lineHeight: 1 }}>
            PONNIS
          </span>
          <span style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#B45309', fontWeight: 700, textTransform: 'uppercase' }}>
            MASALA & FOODS
          </span>
        </div>
      )}
    </div>
  );

  if (linkTo) {
    return <Link to={linkTo} style={{ display: 'inline-flex', alignItems: 'center' }}>{content}</Link>;
  }

  return content;
}
