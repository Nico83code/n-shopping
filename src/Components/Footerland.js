import React from 'react'
import './Footerland.css';
import Logo from "./logo.png"

function Footerland() {
    return (
        <div className="footer">
            <div>
                <img className="footer__logo" src={Logo} />
            </div>

            <div className="footer__landcode">
                <ul>
                <li>Australia</li>
                <li>Brazil</li>
                <li>Canada</li>
                <li>China</li>
                <li>France</li>
                <li>Germany</li>
                <li>India</li>
                <li>Italy</li>
                <li>Japan</li>
                <li>Mexico</li>
                <li>Netherlands</li>
                <li>Singapore</li>
                <li>Spain</li>
                <li>Turkey</li>
                <li>United Arab Emirates</li>
                <li>United States</li>
                </ul>
            </div>
        </div>
    )
}

export default Footerland
