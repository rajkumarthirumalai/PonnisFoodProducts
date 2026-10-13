import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_CATEGORIES, INITIAL_PRODUCTS } from '../data/mockData';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

const ProductContext = createContext();

const STORAGE_KEYS = {
  CATEGORIES: 'ponnis_catalog_categories_v2',
  PRODUCTS: 'ponnis_catalog_products_v2'
};

export function ProductProvider({ children }) {
  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse categories', e);
      }
    }
    return INITIAL_CATEGORIES;
  });

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse products', e);
      }
    }
    return INITIAL_PRODUCTS;
  });

  const [loading, setLoading] = useState(false);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  }, [products]);

  // If Supabase is configured, try loading from Supabase tables
  useEffect(() => {
    if (isSupabaseConfigured && supabase) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const { data: catData, error: catError } = await supabase.from('categories').select('*').order('order');
          if (!catError && catData && catData.length > 0) {
            setCategories(catData);
          }

          const { data: prodData, error: prodError } = await supabase.from('products').select('*');
          if (!prodError && prodData && prodData.length > 0) {
            setProducts(prodData);
          }
        } catch (err) {
          console.warn('Supabase fetch failed, using local/mock storage:', err);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, []);

  // CRUD Operations for Products
  const addProduct = async (productData) => {
    const newProduct = {
      ...productData,
      id: productData.id || `prod-${Date.now()}`,
      slug: productData.slug || productData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      status: productData.status || 'published',
      lastUpdated: 'Just now'
    };

    setProducts(prev => [newProduct, ...prev]);

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('products').insert([newProduct]);
      } catch (e) {
        console.error('Supabase product insert error', e);
      }
    }

    return newProduct;
  };

  const updateProduct = async (id, updatedFields) => {
    setProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, ...updatedFields, lastUpdated: 'Just now' } : p))
    );

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('products').update(updatedFields).eq('id', id);
      } catch (e) {
        console.error('Supabase product update error', e);
      }
    }
  };

  const deleteProduct = async (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('products').delete().eq('id', id);
      } catch (e) {
        console.error('Supabase product delete error', e);
      }
    }
  };

  // CRUD Operations for Categories
  const addCategory = async (catData) => {
    const newCat = {
      ...catData,
      id: catData.id || `cat-${Date.now()}`,
      slug: catData.slug || catData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      productCount: 0,
      order: categories.length + 1
    };

    setCategories(prev => [...prev, newCat]);
    return newCat;
  };

  const updateCategory = (id, updatedFields) => {
    setCategories(prev =>
      prev.map(c => (c.id === id ? { ...c, ...updatedFields } : c))
    );
  };

  const deleteCategory = (id) => {
    setCategories(prev => prev.filter(c => c.id !== id));
  };

  const resetToSampleData = () => {
    setCategories(INITIAL_CATEGORIES);
    setProducts(INITIAL_PRODUCTS);
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(INITIAL_CATEGORIES));
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(INITIAL_PRODUCTS));
  };

  // Helper getters
  const getProductBySlug = (slug) => {
    return products.find(p => p.slug === slug || p.id === slug);
  };

  const getCategoryBySlug = (slug) => {
    return categories.find(c => c.slug === slug || c.id === slug);
  };

  const getProductsByCategory = (categorySlugOrId) => {
    const cat = getCategoryBySlug(categorySlugOrId);
    if (!cat) return [];
    return products.filter(p => p.categoryId === cat.id || p.categoryId === cat.slug);
  };

  const publishedProducts = products.filter(p => p.status === 'published');

  return (
    <ProductContext.Provider
      value={{
        categories,
        products,
        publishedProducts,
        loading,
        addProduct,
        updateProduct,
        deleteProduct,
        addCategory,
        updateCategory,
        deleteCategory,
        getProductBySlug,
        getCategoryBySlug,
        getProductsByCategory,
        resetToSampleData
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}
