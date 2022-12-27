/* eslint-disable linebreak-style */
import React from 'react';
import Header from '../Header';
import Banner from '../Banner';
import Products from '../Products';
import Footer from '../Footer';
import '../../App.css';

function ProductPage() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Products />
      <Footer />
    </div>
  );
}

export default ProductPage;
