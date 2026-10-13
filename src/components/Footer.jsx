import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-grid">
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ marginBottom: '18px' }}>
              <Logo size="medium" linkTo="/" />
            </div>
            <p style={{ color: '#B5ACA3', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Ponnis Masala brings pure, stone-ground spices, cold-pressed oils, and authentic grocery products to kitchens across Malaysia.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: '#B5ACA3' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="#C27803" />
                <span>Kuala Lumpur & Selangor, Malaysia</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="#C27803" />
                <span>+60 3-8920 1888</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="#C27803" />
                <span>inquiry@ponnismasala.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div>
            <h4 className="footer-col-title">Product Categories</h4>
            <ul className="footer-links">
              <li><Link to="/category/spices-powders" className="footer-link">Spices & Powders</Link></li>
              <li><Link to="/category/cooking-oils" className="footer-link">Cooking Oils</Link></li>
              <li><Link to="/category/blended-masalas" className="footer-link">Blended Masalas</Link></li>
              <li><Link to="/category/whole-spices" className="footer-link">Whole Spices</Link></li>
              <li><Link to="/category/flours-grains" className="footer-link">Flours & Grains</Link></li>
              <li><Link to="/category/pickles-pastes" className="footer-link">Pickles & Pastes</Link></li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/products" className="footer-link">All Products Catalog</Link></li>
              <li><Link to="/our-story" className="footer-link">Our Heritage & Story</Link></li>
              <li><Link to="/category/cooking-oils" className="footer-link">Cooking Oils Showcase</Link></li>
            </ul>
          </div>

          {/* Col 4: Purchase Information */}
          <div>
            <h4 className="footer-col-title">In-Store Availability</h4>
            <p style={{ color: '#B5ACA3', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '16px' }}>
              Ponnis Masala products are sold exclusively through verified brick-and-mortar grocery stores, Indian retail outlets, and partner supermarkets.
            </p>
            <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.8rem', color: '#E2DCD5' }}>
              ✓ Digital Catalog Only — Not an online store with checkout. Visit your local grocer to purchase!
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Ponnis Masala & Food Products (Malaysia). All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ fontSize: '0.85rem' }}>Authentic Malaysian Indian Spices</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
