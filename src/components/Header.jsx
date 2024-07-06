import React, { useState } from 'react';
import '../css/Header.css';
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import Drawer from '@mui/material/Drawer';

function Header() {

    const [theme, setTheme] = useState(false);

    const navigate = useNavigate();

    const { products } = useSelector((store) => store.basket);

    const changeTheme = () => {
        const root = document.getElementById('root');
        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "#fff";
        } else {
            root.style.backgroundColor = "#fff";
            root.style.color = "black";
        }
        setTheme(!theme);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='flex-row' onClick={() => navigate("/")}>
                <img className="logo" src="./src/images/logo.png" />
                <p className='logo-text'>Safar C.</p>
            </div>

            <div className='flex-row'>
                <input className='search-input ' type="text" placeholder='Search...' />
                <div>
                    {theme ? <FaMoon className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />}
                    <Badge badgeContent={products.length} color="error">
                        <CiShoppingBasket style={{ marginRight: '6px' }} className='icon' />
                    </Badge>

                </div>
                <Drawer open={true}>
                </Drawer>
            </div>
        </div>
    )
}

export default Header