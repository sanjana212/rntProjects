import React, { useState, useEffect, useContext } from 'react';
import './Header.css';
import nursuryImage from '../Assets/images/nursuryImg.png';
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";



const Header = () => {
    return (
        <div className='header-main'>
            <div><img className='nursuryImage' src={nursuryImage} alt="" /></div>
            <div className='header-search-bar'>
                <input type="text" style={{ border: 'none', outline: 'none' }} placeholder='What are you looking for?' />
                <div style={{ width: '70px', background: 'orange' }}><CiSearch style={{ color: 'black', fontSize: '27px', margin: '10px 20px 12px 10px', fontWeight: 'bold' }} /></div>
            </div>
            <div style={{    margin:'24px 22px 2px 90px'}}>
            <CiShoppingCart style={{fontSize:'44px'}}/>
            </div>
        </div>
    )
}

export default Header;