import React from 'react';
import { Navigation } from '../layout/Navigation';
import { Hero } from '../sections/Hero';
import { Features } from '../sections/Features';
import { ProductGrid } from '../sections/ProductGrid';
import { Newsletter } from '../sections/Newsletter';
import { About } from '../sections/About';
import { Footer } from '../layout/Footer';
// pages/_app.js
import '../components/globals.css';
// Global css
import styles from '../components/GlobalStyle.module.css';

const ceramicsProducts = [
  {
    image: "/images/index/pic1.png",
    title: "The Dandy chair",
    price: "250"
  },
  {
    image: "/images/index/pic2.png",
    title: "Rustic Vase Set",
    price: "155"
  },
  {
    image: "/images/index/pic3.png",
    title: "The Silky Vase",
    price: "125"
  },
  {
    image: "/images/index/pic4.png",
    title: "The Lucy Lamp",
    price: "399"
  }
];

const popularProducts = [
  {
    image: "/images/index/pic5.png",
    title: "The Poplar suede sofa",
    price: "980"
  },
  {
    image: "/images/index/pic6.png",
    title: "The Dandy chair",
    price: "250"
  },
  {
    image: "/images/index/pic7.png",
    title: "The Dandy chair",
    price: "250"
  }
];

export default function EcommercePage() {
  return (
    <div className={styles.parent}>
      <Navigation />
      <Hero />
      <Features />
      <ProductGrid 
        title="New ceramics" 
        products={ceramicsProducts} 
        columns={4}
      />
      <ProductGrid 
        title="Our popular products" 
        products={popularProducts} 
        columns={3}
      />
      <Newsletter />
      <About />
      <Footer />
    </div>
  );
};