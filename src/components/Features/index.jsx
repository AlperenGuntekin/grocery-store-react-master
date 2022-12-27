// Features
import React from 'react';
import './Features.css';

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="content">
        <h1 className="heading">
          {' '}
          <span>Hakkımızda</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src="image/feature-img-1.png" alt="" />
            <h3>Organik</h3>
            <p>Doğal ve sağlıklı seçenekler sunuyoruz.</p>
            {/* <a href="/" className="btn">read more</a> */}
          </div>
          <div className="box">
            <img src="image/feature-img-2.png" alt="" />
            <h3>Taze</h3>
            <p>Her gün tazeleyerek, en taze ürünleri sunuyoruz.</p>
          </div>
          <div className="box">
            <img src="image/feature-img-3.png" alt="" />
            <h3>Doğal</h3>
            <p>Doğal yöntemlerle üretilen fidanlarımız, sağlıklı ve yüksek kaliteli</p>
          </div>
        </div>
      </div>
    </section>
  );
}
