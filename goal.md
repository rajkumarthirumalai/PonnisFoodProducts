# Ponnis Masala — Responsive Product Catalog Website

Design a complete, modern, responsive website for **Ponnis Masala**, a Malaysian grocery brand selling its own packaged masalas, spices, cooking oils, tea and other grocery products.

## 1. Project Goal

Build a visually attractive product catalog that helps customers discover the brand's products.

Customers generally purchase products in person. The website is primarily a digital product showcase. It must not look or behave like an online shopping store.

The website will be implemented using:
- React + Vite
- React Router
- Supabase for database, admin authentication and image storage
- Vercel for frontend hosting

Design the UI to be practical for implementation using reusable React components.

## 2. Visual Direction

Create a premium, modern Indian grocery brand aesthetic suitable for the Malaysian market.

- Use warm spice-inspired colors: cream, turmeric yellow, deep red and subtle green.
- Use attractive product photography featuring realistic spice powders, whole spices, tea and cooking oil bottles.
- Use clean typography, generous spacing, subtle shadows and consistent rounded cards.
- Prioritize product images and easy browsing over decorative animations.
- Use a consistent design system across the public website and admin portal.
- Ensure responsive layouts for desktop, tablet and mobile.

Use a placeholder logo for Ponnis Masala until the actual logo and brand colors are provided. Do not invent official branding.

## 3. Public Website

### Screen A: Homepage

Create a polished landing page containing:

1. Header with logo and navigation.
2. Hero section with a strong brand-focused headline, short description and an “Explore Products” button.
3. Product category grid using image cards.
4. Featured products section.
5. Additional product discovery section.
6. Brief brand introduction.
7. Simple footer with copyright and basic navigation.

The design should immediately communicate what Ponnis Masala sells.

Use realistic sample categories such as:
- Masala Powders
- Whole Spices
- Cooking Oils
- Tea and Beverages
- Flour and Grains
- Pickles and Pastes
- Other Grocery Products

These are sample categories, not confirmed final business data.

### Screen B: Category Listing

Display:
- Breadcrumb navigation
- Category heading and optional banner
- Subcategory cards when applicable
- Product cards arranged in a responsive grid
- Product image, name and short description

Example hierarchy:

Cooking Oils → Groundnut Oil, Sesame Oil, Coconut Oil.

The design must accommodate categories with subcategories as well as categories that directly contain products.

### Screen C: Product Detail

Display:
- Breadcrumb navigation
- Product image gallery
- Product name
- Product description
- Available package sizes or volumes
- Optional variant-specific images
- Related products from the same category
- Clear navigation back to the catalog

Example:

Groundnut Oil
- 100 ml
- 500 ml
- 1 litre

Selecting a package size should visually highlight the selected option and display its associated image when available.

Product sizes are variants of the same product, not separate products.

Do not display prices, cart buttons, checkout or payment options.

### Screen D: Mobile Layout

Design the homepage and product detail page for mobile.

Include:
- Compact header with mobile navigation
- Stacked hero layout
- Two-column product grid where appropriate
- Touch-friendly category cards
- Responsive image gallery
- Readable product descriptions and package-size selectors

Mobile browsing must feel intentional, not like a compressed desktop design.

## 4. Admin Portal

Design a separate admin interface for non-technical staff. Keep it simple and intuitive.

### Screen E: Admin Login

Include:
- Ponnis Masala branding
- Username/email and password fields
- Sign-in button
- Clear validation and error states

Authentication will be implemented using Supabase. The interface should support authenticated administrators with the same permissions.

### Screen F: Admin Dashboard

Include:
- Total products
- Total categories
- Published products
- Draft products
- Recently added or updated products
- Quick action to add a product

Avoid unnecessary analytics charts.

### Screen G: Category Management

Include:
- Category and subcategory listing
- Create and edit forms
- Category name
- Description
- Optional category image
- Display order
- Parent category selection where applicable
- Clear edit and remove actions

### Screen H: Product Management

Create a clean management table containing:
- Product thumbnail
- Product name
- Category
- Publication status
- Last updated information
- Edit and delete actions
- Add Product button

Include empty, loading and error states.

### Screen I: Add / Edit Product

Design a practical form containing:

**Basic information**
- Product name
- Product description
- Category and subcategory selection

**Product images**
- Upload multiple images
- Preview uploaded images
- Select a primary image
- Remove or reorder images

**Package variants**
- Add multiple variants
- Package size or volume, such as 10 g, 50 g, 100 ml or 1 litre
- Optional image for each variant
- Edit or remove individual variants

**Publishing**
- Draft or published status
- Save and cancel actions
- Preview product action

Allow administrators to add, edit and remove package variants without creating duplicate products.

## 5. Functional Constraints

- Product and category content will be stored in Supabase.
- Product images will be stored in Supabase Storage.
- The public catalog will display published products only.
- Categories and subcategories must be manageable from the admin portal.
- Each product can have multiple images and multiple package-size variants.
- Product variants can optionally have their own images.
- The catalog should support approximately 200 product images.
- Do not include customer accounts, search, shopping cart, orders, checkout, online payments, inventory management or contact forms.
- Do not add unnecessary backend-dependent features to the visual design.

## 6. Reusable Components

Design reusable components for:
- Header and navigation
- Hero section
- Category card
- Product card
- Breadcrumbs
- Product image gallery
- Package-size selector
- Related products
- Admin sidebar
- Admin data table
- Image upload area
- Product form
- Status badge
- Confirmation dialog
- Loading, empty and error states

Maintain consistent typography, spacing, colors and interaction patterns.

## 7. Expected Output

Generate a cohesive set of high-fidelity screens covering the homepage, category listing, product detail, mobile layouts, admin login, admin dashboard, category management and product add/edit forms.

Prioritize visual quality, simplicity, maintainability and practical implementation in React + Vite.

Use realistic placeholder product imagery and content. Make the public website visually engaging while keeping the admin interface functional-looking and easy for non-technical users.

The result should be a polished product showcase website, not an e-commerce storefront.