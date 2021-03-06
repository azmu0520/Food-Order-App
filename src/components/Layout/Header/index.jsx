import React from 'react';
import { Navbar, Wrapper } from './style';
import ImgFood from '../../../assets/img/foodimg.jpg';
import NavabrBtn from './NavbarBtn';
const Header = (props) => {
  return (
    <Wrapper>
      <Navbar>
        <h1>Uchqkurgan Meals</h1>
        <NavabrBtn onClick={props.onShowCard}>Your Cart</NavabrBtn>
      </Navbar>
      <Navbar.ImgWrap>
        <img src={ImgFood} alt='Food' />
      </Navbar.ImgWrap>
    </Wrapper>
  );
};

export default Header;
