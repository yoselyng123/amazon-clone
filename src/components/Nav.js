import React from 'react';
import './nav.css';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import { Avatar } from '@material-ui/core';

function Nav() {
    const showHeigth = () => {
        const elements = document.querySelectorAll('.nav');

        elements.forEach((e) => {
            console.log(e.scrollHeight);
        });
    };

    return (
        <div className='nav'>
            <div className='nav__contents'>
                <div className='nav__left'>
                    <img
                        className='nav__logo'
                        src='https://www.pinclipart.com/picdir/big/57-576184_view-out-amazon-storefront-amazon-logo-white-png.png'
                        alt='Amazon Logo'
                        onClick={showHeigth}
                    />
                </div>
                <div className='nav__searchBar'>
                    <input type='text' />
                    <select name='' id=''>
                        <option value='all categories'>All categories</option>
                    </select>
                    <div className='nav__searchIcon'>
                        <SearchIcon />
                    </div>
                </div>
                <div className='nav__right'>
                    <div className='nav__icon'>
                        <FavoriteBorderOutlinedIcon />
                    </div>
                    <div className='nav__icon nav__icon--clicked'>
                        <span class='nav__notify-bubble'>2</span>
                        <ShoppingCartOutlinedIcon />
                    </div>
                    <div className='nav__icon'>
                        <NotificationsNoneOutlinedIcon />
                    </div>
                    <div className='nav__avatar'>
                        <Avatar />
                        <ArrowDropDownOutlinedIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
