// Products
import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
// import { Link } from 'react-router-dom';
import Data from '../../Data.json';

export default function Products() {
  SwiperCore.use([Autoplay]);
  return (
    <section className="products" id="products">
      <h1 className="heading">
        {' '}
        <span>Ürünlerimiz</span>
      </h1>
      <div className="products-slider slider">
        <div className="wrapper swiper-wrapper">
          <Swiper
            loop
            spaceBetween={20}
            autoplay={{ delay: 7500, disableOnInteraction: false }}
            slidesPerView={1}
            pagination={{ clickable: true }}
            centeredSlides
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: { slidesPerView: 3 },
            }}
            style={{ padding: '1rem' }}
          >
            {Data.products.map((product) => (
              <SwiperSlide>
                <div className="box">
                  <img src={product.image} alt="" />
                  <h3>{product.name}</h3>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                  </div>
                  <button type="button" className="btn"> Göz At </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="products-slider">
        <div className="wrapper swiper-wrapper">
          <Swiper
            loop
            spaceBetween={20}
            autoplay={{ delay: 7500, disableOnInteraction: false }}
            slidesPerView={1}
            pagination={{ clickable: true }}
            centeredSlides
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: { slidesPerView: 3 },
            }}
            style={{ padding: '1rem' }}
          >
            {Data.products2.map((product2) => (
              <SwiperSlide>
                <div className="box">
                  <img src={product2.image} alt="" />
                  <h3>{product2.name}</h3>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                  </div>
                  <button type="button" className="btn">
                    Göz At
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
