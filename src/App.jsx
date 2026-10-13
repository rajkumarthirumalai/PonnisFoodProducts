import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import { AuthProvider, useAuth } from './context/AuthContext';

// Public Components & Pages
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductsPage from './pages/ProductsPage';
import OurStoryPage from './pages/OurStoryPage';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminProductForm from './pages/admin/AdminProductForm';
import AdminCategories from './pages/admin/AdminCategories';
import AdminMediaLibrary from './pages/admin/AdminMediaLibrary';

// Protected Route Component for Admin
function ProtectedAdminRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
}

// Public Layout Wrapper with Header and Footer
function PublicLayout({ children }) {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Showcase Pages */}
            <Route
              path="/"
              element={
                <PublicLayout>
                  <HomePage />
                </PublicLayout>
              }
            />
            <Route
              path="/products"
              element={
                <PublicLayout>
                  <ProductsPage />
                </PublicLayout>
              }
            />
            <Route
              path="/category/:categorySlug"
              element={
                <PublicLayout>
                  <CategoryPage />
                </PublicLayout>
              }
            />
            <Route
              path="/product/:productSlug"
              element={
                <PublicLayout>
                  <ProductDetailPage />
                </PublicLayout>
              }
            />
            <Route
              path="/our-story"
              element={
                <PublicLayout>
                  <OurStoryPage />
                </PublicLayout>
              }
            />

            {/* Admin Portal Authentication */}
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* Protected Admin Portal */}
            <Route
              path="/admin"
              element={
                <ProtectedAdminRoute>
                  <AdminLayout />
                </ProtectedAdminRoute>
              }
            >
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="products/new" element={<AdminProductForm />} />
              <Route path="products/edit/:productId" element={<AdminProductForm />} />
              <Route path="categories" element={<AdminCategories />} />
              <Route path="media" element={<AdminMediaLibrary />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </AuthProvider>
  );
}
