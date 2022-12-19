import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faSeedling,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="box-container">
        <div className="box">
          <h3>İletişim Bilgileri</h3>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            0539 386 2087
          </a>
          <a href="/" className="links" id="emailLink">
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            haruncengiz@hotmail.com
          </a>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </i>
            Pirinççi Köyü - Ödemiş / İZMİR
          </a>
        </div>
        <div className="box">
          <h3>Hızlı Menü</h3>
          <a href="#home" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            Ana Sayfa
          </a>
          <a href="#features" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            Hakkımızda
          </a>
          <a href="#products" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            Ürünler
          </a>
          <a href="#categories" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            Kategoriler
          </a>
          <a href="#reviews" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            Yorumlar
          </a>
        </div>
        <div className="box">
          <FontAwesomeIcon icon={['fas', 'faUser']} />
          <h3>
            Cengiz Fidancılık Ödemiş
            <i>
              <FontAwesomeIcon icon={faSeedling} />
            </i>
          </h3>
          <p>
            Birinci Kalite Ürünler
          </p>
          <div className="share">
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faFacebookF} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faTwitter} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faInstagram} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faLinkedin} />
              </i>
            </a>
          </div>
        </div>
      </div>
      <div className="credits">
        <p>
          Created By
          {' '}
          <a href="https://www.alperenguntekin.com" target="_blank" rel="noreferrer"><span>Alperen Güntekin</span></a>
          {' '}
          | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
