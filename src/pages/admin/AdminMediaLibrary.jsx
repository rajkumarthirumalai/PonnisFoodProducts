import React, { useState } from 'react';
import { Upload, Copy, Check, Image as ImageIcon } from 'lucide-react';

export default function AdminMediaLibrary() {
  const [copiedPath, setCopiedPath] = useState(null);

  const mediaItems = [
    { name: 'Groundnut Oil Feature', path: '/images/groundnut_oil_feature.jpg', tag: 'Product Detail' },
    { name: 'Spice Hero Banner', path: '/images/spice_hero_banner.jpg', tag: 'Hero Section' },
    { name: 'Cooking Oils Banner', path: '/images/cooking_oils_banner.jpg', tag: 'Category Banner' },
    { name: 'Cooking Oils Trio', path: '/images/cooking_oils.jpg', tag: 'Category Card' },
    { name: 'Sesame Oil Product', path: '/images/sesame_oil.jpg', tag: 'Product' },
    { name: 'Spices & Powders', path: '/images/spices_powders.jpg', tag: 'Category Card' },
    { name: 'Blended Masalas', path: '/images/blended_masalas.jpg', tag: 'Category Card' },
    { name: 'Whole Spices Collection', path: '/images/whole_spices.jpg', tag: 'Category Card' },
    { name: 'Flours & Grains', path: '/images/flours_grains.jpg', tag: 'Category Card' },
    { name: 'Pickles & Pastes', path: '/images/pickles_pastes.jpg', tag: 'Category Card' },
    { name: 'Ready Mix', path: '/images/ready_mix.jpg', tag: 'Category Card' },
    { name: 'Other Products', path: '/images/other_products.jpg', tag: 'Category Card' },
    { name: 'Official Brand Logo', path: '/favicon.jpeg', tag: 'Branding' }
  ];

  const handleCopy = (path) => {
    navigator.clipboard.writeText(path);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  return (
    <>
      <div className="admin-topbar">
        <h1 className="admin-topbar-title">Media Library</h1>
        <div style={{ fontSize: '0.85rem', color: '#64748B' }}>
          {mediaItems.length} stored catalog assets
        </div>
      </div>

      <div className="admin-content-area">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
          {mediaItems.map((item, idx) => {
            const isCopied = copiedPath === item.path;
            return (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src={item.path}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '14px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#0284C7', background: '#E0F2FE', padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                      {item.tag}
                    </span>
                    <h4 style={{ fontSize: '0.92rem', fontWeight: 600, marginTop: '8px', color: '#1E293B' }}>{item.name}</h4>
                    <code style={{ fontSize: '0.75rem', color: '#64748B', display: 'block', wordBreak: 'break-all', marginTop: '4px' }}>
                      {item.path}
                    </code>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(item.path)}
                    className="btn btn-secondary btn-sm"
                    style={{ marginTop: '12px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                  >
                    {isCopied ? <Check size={14} color="#16A34A" /> : <Copy size={14} />}
                    <span>{isCopied ? 'Copied!' : 'Copy Path'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
