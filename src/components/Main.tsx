import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import { CharactersList } from "./CharactersList/CharactersList";

export const Main = () => {

  let navigate = useNavigate();
  const cookies = new Cookies();
  let publicKeyCookie = cookies.get('publicKey');;
  let privateKeyCookie = cookies.get('privateKey');
  let md5Hash = cookies.get('md5');

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
