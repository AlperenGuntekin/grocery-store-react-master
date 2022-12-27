/* eslint-disable max-len */
// Reviews
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import SwiperCore, { Autoplay } from 'swiper';
import './Reviews.css';
import 'swiper/swiper.min.css';

export default function Reviews() {
  SwiperCore.use([Autoplay]);
  return (
    <section className="reviews" id="reviews">
      <h1 className="heading">
        Müşteri
        {' '}
        <span>Yorumları</span>
      </h1>
      <div className="reviews-slider">
        <Swiper
          loop
          autoplay={{ delay: 7500, disableOnInteraction: false }}
          slidesPerView={3}
          centeredSlides
          spaceBetween={20}
          pagination={{ clickable: true }}
          style={{ padding: '1rem' }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <div className="box">
              {/* <img src="image/pic-1.png" alt="" /> */}
              <p>
                Ürünler çok lezzetli ve tazeydi. Hizmetler de çok iyiydi, özellikle teslimat hızlı ve kolaydı.
              </p>
              <h3>Elif Öztürk</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              {/* <img src="image/pic-2.png" alt="" /> */}
              <p>
                Ürünler çok kaliteli ve sağlıklı. Hizmetler de çok iyi, özellikle müşteri hizmetleri ekibi çok yardımsever ve ilgiliydi.
              </p>
              <h3>Can Çelik</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              {/* <img src="image/pic-3.png" alt="" /> */}
              <p>
                Ürünler gerçekten çok lezzetli ve taze. Ayrıca, paketleme de çok iyiydi. Teslimat da çok hızlı oldu.
              </p>
              <h3>Selin Demir</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              {/* <img src="image/pic-4.png" alt="" /> */}
              <p>
                Ürünler gerçekten çok lezzetli ve taze. Ayrıca, paketleme de çok iyiydi. Teslimat da çok hızlı oldu.
              </p>
              <h3>Emre Yılmaz</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
