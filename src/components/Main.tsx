import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import { CharactersList } from "./Characters/CharactersList";

export const Main = () => {

  let navigate = useNavigate();
  const cookies = new Cookies();
  const publicKeyCookie = cookies.get('publicKey');;
  const privateKeyCookie = cookies.get('privateKey');
  const md5Hash = cookies.get('md5');

  useEffect(() => {
    async function checkCookies() {

      if (!publicKeyCookie || !privateKeyCookie) 
        navigate('/auth');
      
    }
    checkCookies();
  }, []);

  return (
    <>
      <div className="header">
          <div className="search-bar">
              <input type="search" className="search" placeholder="Search Here" />
              <button onClick={() => navigate(`/auth`)}>Auth</button>
              <button onClick={() => navigate(`/`)}>Characters</button>
              <button onClick={() => navigate(`/comics`)}>Comics</button>
              <button onClick={() => navigate(`/creators`)}>Creators</button>
          </div>
      </div>
      <div className="content">
        {
          md5Hash ? <CharactersList publicKeyCookie={publicKeyCookie} md5Hash={md5Hash} /> : <p>Not Found</p>
        }
      </div>
    </>
  );
}
