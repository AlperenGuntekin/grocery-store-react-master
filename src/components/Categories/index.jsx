/* eslint-disable jsx-a11y/anchor-is-valid */
// Categories
import React from 'react';
import './Categories.css';

export default function Categories() {
  return (
    <section className="categories" id="categories">
      <h1 className="heading">
        Ürün
        {' '}
        <span>Kategorileri</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img src="image/plum.png" alt="" />
          <h3>Erik</h3>
          <ul>
            <a href="#"><li>Can Erik</li></a>
            <a href="#"><li>Papaz Erik</li></a>
            <a href="#"><li>Anjelika Erik</li></a>
          </ul>
        </div>

        <div className="box">
          <img src="image/pear.png" alt="" />
          <h3>Armut</h3>
          <ul>
            <a href="#"><li>Naşhi Armut</li></a>
            <a href="#"><li>Deveci Armut</li></a>
          </ul>
        </div>

        <div className="box">
          <img src="image/apple.png" alt="" />
          <h3>Elma</h3>
          <ul>
            <a href="#"><li>Fuji Elma</li></a>
            <a href="#"><li>Golden Elma</li></a>
            <a href="#"><li>Pink Ledy Elma</li></a>
            <a href="#"><li>Gransimit Elma</li></a>
            <a href="#"><li>Mondial Gala Elma</li></a>
          </ul>
        </div>

        <div className="box">
          <img src="image/apricot.png" alt="" />
          <h3>Kayısı</h3>
          <ul>
            <a href="#"><li>Magador Kayısı</li></a>
            <a href="#"><li>Şekerpare Kayısı</li></a>
          </ul>
        </div>
      </div>
    </section>
  );
}
