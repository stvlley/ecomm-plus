import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='header'>

        {/* LOGO */}
        <img 
        className='header__logo'
        alt='ecomm plus'
        src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' />

        {/* SEARCH BAR */}
        <div
        className='header__search'>
            <input
            className='header__searchInput'
            type='text'
            />
            <SearchIcon 
            className='header__searchIcon'/>
        </div>

        {/* NAVBAR */}
        <div className='header__nav'>
            <div className='header__option'>
                <span className='header__optionLineOne'>
                    Hello Guest
                </span>
                <span className='header__optionLineTwo'>
                    Sign In
                </span>
                
            </div>

            <div className='header__option'>
            <span className='header__optionLineOne'>
                    Return
                </span>
                <span className='header__optionLineTwo'>
                    & Orders
                </span>
            </div>

            <div className='header__option'>
            <span className='header__optionLineOne'>
                    Your
                </span>
                <span className='header__optionLineTwo'>
                    Prime
                </span>
            </div>

        </div>
    </div>
  )
}

export default Header