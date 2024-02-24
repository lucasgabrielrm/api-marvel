import { useNavigate } from "react-router-dom";
import './Header.scss';

export const Header = () => {


    return (
        <nav className="navbar">
            <div className="logo">
                <a href="/">
                    <img src="./images/marvel-logo.png" alt="Marvel Comics logo" />
                </a>
            </div>
            <div className="links">
                <ul className="link-items">
                    <li><a href="/">Characters</a></li>
                    <li><a href="/comics">Comics</a></li>
                    <li><a href="/creators">Creators</a></li>
                    <li><a href="/auth">Authentication</a></li>
                </ul>
            </div>
            {/* <div className="search-bar">
                <input type="search" className="search" placeholder="Search Here" />
            </div> */}
        </nav>
    )
}
