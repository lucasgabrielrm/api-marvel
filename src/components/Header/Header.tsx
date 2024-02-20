import { useNavigate } from "react-router-dom";

export const Header = () => {

    let navigate = useNavigate();

    return (
        <div className="header">
            <div className="bg">
                <img src="./images/marvel-logo.png" alt="Marvel Comics logo" />
            </div>
            <div className="search-bar">
                <input type="search" className="search" placeholder="Search Here" />
                <button onClick={() => navigate(`/auth`)}>Auth</button>
                <button onClick={() => navigate(`/`)}>Characters</button>
                <button onClick={() => navigate(`/comics`)}>Comics</button>
                <button onClick={() => navigate(`/creators`)}>Creators</button>
            </div>
        </div>
    )
}
