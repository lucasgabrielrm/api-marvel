import { NavLink } from 'react-router-dom';
import DarkMode from '../DarkMode/DarkMode';
import './Header.scss';
import { useState } from 'react';

export const Header = (props: any) => {

    const [showMenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <a href="/">
                    <img src="./images/marvel-logo.png" alt="Marvel Comics logo" />
                </a>
            </div>
            <div className="menu" onClick={toggleMenu}>
                <img src="./images/menu.png" alt="Menu" />
            </div>
            {
                !props.hideNavbar &&
                <div className="links">
                    <ul className={`link-items ${showMenu && 'active'}`}>
                        <li><NavLink to="/">Characters</NavLink></li>
                        <li><NavLink to="/comics">Comics</NavLink></li>
                        <li><NavLink to="/creators">Creators</NavLink></li>
                        <li><NavLink to="/auth">Authentication</NavLink></li>
                        <li><DarkMode /></li>
                    </ul>
                </div>
            }
        </nav>
    )
}
