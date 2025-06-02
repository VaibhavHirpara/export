import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Footer from './Footer';
import Header from './Header';
import Home from './Componet/HomePage/Home';
import Contact from './Componet/Contact/Contact';
import About from './Componet/About/About';
import Product from './Componet/Product/Product';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './Layout';


const root = ReactDOM.createRoot(document.getElementById('root'));

let allRouter = createBrowserRouter([

  {
    path: "/",
    element: (
      <Layout>
        <Home/>
      </Layout>
    )
  },
  {
    path: "/about",
    element: 
    (
      <Layout>
       <About />
      </Layout>
    )
   
  },
  {
    path: "/product",
    element:    (
      <Layout>
       <Product />
      </Layout>
    )
  },
  {
    path: "/contact",
    element:   (
      <Layout>
       <Contact />
      </Layout>
    ) 
  },
])
root.render(
  <React.StrictMode>
    <RouterProvider router={allRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
