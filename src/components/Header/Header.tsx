import { useNavigate } from "react-router-dom";
import './Header.scss';

export const Header = () => {

    let navigate = useNavigate();

    return (
        <header className="header">
            <a href="/" className="logo">
                <img src="./images/marvel-logo.png" alt="Marvel Comics logo" />
            </a>
            <div className="links">
                <ul className="link-items">
                    <li><a href="/">Characters</a></li>
                    <li><a href="/comics">Comics</a></li>
                    <li><a href="/creators">Creators</a></li>
                    <li><a href="/auth" className="auth-button">Authentication</a></li>
                </ul>
                
            </div>
            {/* <div className="search-bar">
                <input type="search" className="search" placeholder="Search Here" />
            </div> */}
        </header>
    )
}
