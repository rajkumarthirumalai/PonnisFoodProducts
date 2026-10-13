import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { Award, Leaf, Users, ShieldCheck, Heart } from 'lucide-react';

export default function OurStoryPage() {
  return (
    <div className="site-container" style={{ padding: '36px 20px 80px' }}>
      <Breadcrumb items={[{ label: 'Our Story' }]} />

      <div style={{ maxWidth: '860px', margin: '32px auto 0' }}>
        <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Heritage & Craftsmanship
        </span>
        <h1 className="hero-title" style={{ fontSize: '3rem', margin: '8px 0 24px' }}>
          Bringing the Authentic Soul of Indian Cooking to Malaysia
        </h1>

        <div style={{ borderRadius: '20px', overflow: 'hidden', margin: '32px 0', border: '1px solid var(--border)' }}>
          <img
            src="/images/spice_hero_banner.jpg"
            alt="Ponnis heritage spice selection"
            style={{ width: '100%', height: '380px', objectFit: 'cover' }}
          />
        </div>

        <div style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-body)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p>
            At <strong>Ponnis Masala</strong>, our journey began with a simple belief: the soul of any comforting home meal lies in the purity of its spices and cooking oils. In Malaysian Indian kitchens, where family recipes have been passed down through generations, compromised ingredients have no place.
          </p>

          <p>
            For decades, our founders traveled directly to traditional farming regions in Tamil Nadu, Erode, and Guntur to identify heritage varieties of turmeric, stemless chillies, and sun-cured groundnuts. We partnered with local growers who honor slow, natural drying and traditional processing techniques.
          </p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-dark)', marginTop: '24px' }}>
            Why Cold-Pressed & Stone-Ground Matters
          </h2>
          <p>
            Modern mass manufacturing relies on high-heat extraction that burns out natural aroma molecules and destroys delicate vitamins. At Ponnis, our cooking oils—including our signature <em>Groundnut Oil</em> and <em>Pure Gingelly Sesame Oil</em>—are extracted through cold-pressed expellers at low temperatures.
          </p>
          <p>
            Similarly, our spice powders are pulverized in stone and hammer mills with cooling intervals to prevent heat degradation. You can see the difference in our rich natural color, and smell it the moment the spices hit hot oil in your skillet.
          </p>
        </div>

        {/* Values Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginTop: '48px' }}>
          <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)' }}>
            <Leaf size={28} color="var(--primary)" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>100% Farm Pure</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>Never cut with artificial fillers, starch, synthetic aromatics or dyes.</p>
          </div>

          <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)' }}>
            <Award size={28} color="var(--gold)" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>Generational Recipes</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>Balanced aromatic proportions crafted by seasoned master spice blenders.</p>
          </div>

          <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)' }}>
            <Heart size={28} color="#16A34A" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>In Every Malaysian Home</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>Distributed to local brick-and-mortar grocers across peninsula Malaysia.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
