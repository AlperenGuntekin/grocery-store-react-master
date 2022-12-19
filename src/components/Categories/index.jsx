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
            <li>Can Erik</li>
            <li>Papaz Erik</li>
            <li>Anjelika Erik</li>
          </ul>
        </div>

        <div className="box">
          <img src="image/pear.png" alt="" />
          <h3>Armut</h3>
          <ul>
            <li>Naşhi Armut</li>
            <li>Deveci Armut</li>
          </ul>
        </div>

        <div className="box">
          <img src="image/apple.png" alt="" />
          <h3>Elma</h3>
          <ul>
            <li>Fuji Elma</li>
            <li>Golden Elma</li>
            <li>Pink Ledy Elma</li>
            <li>Gransimit Elma</li>
            <li>Mondial Gala Elma</li>
          </ul>
        </div>

        <div className="box">
          <img src="image/apricot.png" alt="" />
          <h3>Kayısı</h3>
          <ul>
            <li>Magador Kayısı</li>
            <li>Şekerpare Kayısı</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
