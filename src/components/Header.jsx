import React from 'react'
import '../css/Header.css';

function Header() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='flex-row'>
                <img className="logo" src="./src/images/logo.png" />
                <p className='logo-text'>Safar C.</p>
            </div>

            <div>
                <input type="text" />
            </div>
        </div>
    )
}

export default Header