import React from 'react';
import './styles/Header.css';
import mountainLogo from '../assets/mountainLogo-min.png';
// import travellerLogo from '../assets/travellerLogo-min.png';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="brand">
                <img className="header__icon" src={mountainLogo} alt="logo" />
                <p className="brand__name">Stay-In</p>
            </div>
            
            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>

        </div>
    )
}

export default Header
