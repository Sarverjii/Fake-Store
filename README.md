# 🛍️ Fake Store - React App

This is a modern e-commerce web application built with **React**. Users can browse products, view product details, manage their cart, and navigate through informational pages. The product data is fetched from the **Fake Store API**.

## 🔑 Key Features

- **Home Page**: Features a hero banner, categories, and featured products.
- **Products Page**: Displays all available products in a responsive grid.
- **Product Details Page**: Detailed view of an individual product with "Add to Cart" functionality.
- **Cart Page**: View all cart items, see total amount, and remove products.
- **About Page**: Overview about the store and project.
- **Contact Page**: Contact form or information for reaching out.
- **Responsive Design**: Optimized for mobile, tablet, and desktop screens.
- **Dynamic Cart Count**: Header shows cart item count using React Context API.

## 🛠️ Technologies Used

- **React** – Component-based UI development
- **React Router DOM** – Routing between pages
- **React Context API** – Global state management for the cart
- **CSS Modules** – Scoped styling
- **React Icons** – Iconography (cart, menu, etc.)
- **Fake Store API** – External product data source

## 📁 Project Structure

```
src/
├── API/            # API functions (e.g., getProduct.js)
├── components/     # Reusable UI components (Header, Footer, CartItem)
├── context/        # React Context (CartContext.js)
├── pages/          # Page components
│   ├── Home/
│   ├── Products/
│   ├── ProductPage/
│   ├── Cart/
│   ├── About/
│   └── Contact/
└── main.jsx        # Entry point
```

## ▶️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Sarverjii/Fake-Store.git
cd Fake-Store
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

### 4. Open the app

Visit: http://localhost:5173

## 🌐 Pages Overview

| Page           | Description                                 |
| -------------- | ------------------------------------------- |
| `/`            | Home with hero banner and featured products |
| `/products`    | All products in a grid layout               |
| `/product/:id` | Detailed product page with add-to-cart      |
| `/cart`        | View cart items, total, and checkout option |
| `/about`       | Info about the fake store                   |
| `/contact`     | Contact form or details to reach out        |

## 🧠 Cart Functionality

- Products added to cart are stored in `localStorage`
- React Context API keeps cart count updated across the app
- Deleting items updates both the view and the context
- Total price is dynamically calculated

## 📸 Screenshots

### Desktop Views

<div style="display: flex; justify-content: space-between;">
  <img src="./public/ReadmeImages/desktop_home.jpeg" alt="Desktop Home Page" height="300" />
  <img src="./public/ReadmeImages/desktop_products.jpeg" alt="Desktop Products Page" height="300" />
  <img src="./public/ReadmeImages/desktop_product.jpeg" alt="Desktop Product Detail" height="300" />
  <img src="./public/ReadmeImages/desktop_categories.jpeg" alt="Desktop Categories" height="300" />
  <img src="./public/ReadmeImages/desktop_about.jpeg" alt="Desktop About Page" height="300" />
  <img src="./public/ReadmeImages/desktop_contact.jpeg" alt="Desktop Contact Page" height="300" />
</div>

### Mobile Views

<div style="display: flex; justify-content: space-between;">
  <img src="./public/ReadmeImages/mobile_home.jpeg" alt="Mobile Home Page" height="400" />
  <img src="./public/ReadmeImages/mobile_categories.jpeg" alt="Mobile Categories" height="400" />
  <img src="./public/ReadmeImages/mobile_product.jpeg" alt="Mobile Product Detail" height="400" />
  <img src="./public/ReadmeImages/mobile_cart.jpeg" alt="Mobile Cart Page" height="400" />
</div>

## 🚧 Future Improvements

- 🔐 User authentication (Login/Register)
- ⭐ Product ratings and reviews
- 🔍 Product search functionality
- 🧾 Checkout and payment integration

## 🤝 Contributing

Contributions, bug reports, and suggestions are welcome! Feel free to fork the repository and submit a pull request.

Made with ❤️ using React.
