// Navbar
import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

export default function Navbar(props) {
  const { active } = props;
  return (
    <nav className={`navbar ${active ? 'active' : ''}`}>
      <a href="#home">Ana Sayfa</a>
      <a href="#features">Hakkımızda</a>
      <a href="#products">Ürünler</a>
      <a href="#categories">Kategoriler</a>
      <a href="#reviews">Yorum</a>
    </nav>
  );
}
Navbar.propTypes = {
  active: PropTypes.bool,
}.isRequired;
