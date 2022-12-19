import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSeedling,
  faBars,
  faSearch,
  // faUser,
} from '@fortawesome/free-solid-svg-icons';
import SearchForm from './SearchForm';
import UserForm from './UserForm';
import './Header.css';
import Navbar from './Navbar';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeUserForm, setActiveUserForm] = useState(false);
  window.onscroll = () => {
    setActiveUserForm(false);
    setActiveSearch(false);
    setActiveMenu(false);
  };
  const handleMenuButton = () => {
    setActiveMenu(!activeMenu);
    setActiveSearch(false);
    setActiveUserForm(false);
  };
  const handleSearchButton = () => {
    setActiveSearch(!activeSearch);
    setActiveUserForm(false);
    setActiveMenu(false);
  };
  // const handleUserFormButton = () => {
  //   setActiveUserForm(!activeUserForm);
  //   setActiveSearch(false);
  //   setActiveMenu(false);
  // };
  return (
    <header className="header">
      <a href="/" className="logo">
        <i>
          <FontAwesomeIcon icon={faSeedling} />
        </i>
        Cengiz Fidancılık Ödemiş
      </a>
      <Navbar active={activeMenu} />
      <div className="icons">
        <button type="button" id="menu-btn" onClick={handleMenuButton}>
          <FontAwesomeIcon className="fa-icon" icon={faBars} />
        </button>
        <button type="button" id="search-btn" onClick={handleSearchButton}>
          <FontAwesomeIcon className="fa-icon" icon={faSearch} />
        </button>
        {/* <button type="button" id="user-btn" onClick={handleUserFormButton}>
          <FontAwesomeIcon className="fa-icon" icon={faUser} />
        </button> */}
      </div>
      <SearchForm active={activeSearch} />
      <UserForm active={activeUserForm} />
    </header>
  );
}
