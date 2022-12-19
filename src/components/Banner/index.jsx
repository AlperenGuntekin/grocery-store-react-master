// Banner
import React from 'react';
import './Banner.css';

export default function Banner() {
  return (
    <section
      className="banner"
      id="banner"
      style={{
        background: 'url("../image/banner-bg.webp") no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="content">
        <h3>
          Birinci
          {' '}
          <span>Kalite</span>
          {' '}
          Ürünler
        </h3>
        <p>
          Fidanların TSE ve belgeleri ve Tarım Bakanlığından onaylıdır
        </p>
        <button type="button" className="btn">
          Göz At
        </button>
      </div>
    </section>
  );
}
