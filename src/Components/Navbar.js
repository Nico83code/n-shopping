import React from 'react'
import './Navbar.css'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

function Navbar() {
    return (
        <div className="navbar__container">
            <div>
                <LocationOnOutlinedIcon className="navbar_location" />
            </div>
            <div className="navbar__section">
                <span className="navbar__optionLineOne">Hello</span>
                <span className="navbar__optionLineTwo">Select your address</span>
            </div>

            <div className="navbar__menu">
                <ul>
                    <li>Best Sellers</li>
                    <li>Today's Deals</li>
                    <li>Prime Video</li>
                    <li>Customer Service</li>
                    <li>Books</li>
                    <li>New Releases</li>
                    <li>Gift Ideas</li>
                    <li>Home & Garden</li>
                    <li>Electronics</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
