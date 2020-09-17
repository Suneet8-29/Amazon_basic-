import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo' />
            <div className='header__search' >
                <input className='header__searchInput' type='input' />
                <SearchIcon className = 'header_searchIcon' ></SearchIcon>
            </div>
            <div className='header__nav'>
                <div className='header__option'>
                    <span className='headerOptionLine1'>
                        Hello User
                    </span>
                    <span className='headerOptionLine2'>
                        Sign In
                    </span>
                </div>
                <div className='header__option'>
                    <span className='headerOptionLine1'>
                        Returns
                    </span>
                    <span className='headerOptionLine2'>
                        &Orders
                    </span>
                </div>
                <div className='header__option'>
                    <span className='headerOptionLine1'>
                        Your
                    </span>
                    <span className='headerOptionLine2'>
                        Prime
                    </span>
                </div>
            </div>

            <div className='header__optionBasket'>
                <ShoppingBasketIcon></ShoppingBasketIcon>
                <span className='headerOptionLine2 header__optionBasket'>0</span>
            </div>

        </div>
        
    )
}

export default Header
