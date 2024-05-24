import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cl from './Header.module.scss';
import { Container } from '@mui/material';

const Header = () => {
  const setActive = ({ isActive }) => (isActive ? cl.active__link : cl.link);
  return (
    <div className={cl.wrapper}>
      <Container>
        <div className={cl.container}>
          <NavLink to='/home' className={cl.title}>
            Exchange Rates
          </NavLink>
          <ul className={cl.list}>
            <NavLink className={setActive} to='/home'>
              Home
            </NavLink>

            <NavLink className={setActive} to='/contacts'>
              Contacts
            </NavLink>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Header;
