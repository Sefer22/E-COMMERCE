import React from 'react'
import '../css/Header.css';

function Header() {
    return (
        <div>
            <div>
                <img className="logo" src="./src/images/logo.png" />
                <p className='logo-text'>Safar C.</p>
            </div>
        </div>
    )
}

export default Header