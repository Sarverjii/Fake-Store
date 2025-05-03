import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './screens/Home/Home'
import Layout from './components/Layout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ProductPage from './screens/ProductPage/ProductPage'
import Products from './screens/Products/Products'
import ProductCategory from './screens/ProductCategory/ProductCategory'
import About from './screens/About/About'
import ContactUs from './screens/ContactUs/ContactUs'
import Cart from './screens/Cart/Cart'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="product/:productID" element={<ProductPage/>}/> 
      <Route path="product/category/:categoryID" element={<ProductCategory/>}/>
      <Route path="products" element={<Products/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<ContactUs/>}/>
      <Route path="cart" element={<Cart/>}/>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
