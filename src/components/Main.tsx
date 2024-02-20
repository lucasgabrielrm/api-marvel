import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import { CharactersList } from "./Characters/CharactersList";
import { Header } from "./Header/Header";

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
      <Header />
      <div className="content">
        {
          md5Hash ? <CharactersList publicKeyCookie={publicKeyCookie} md5Hash={md5Hash} /> : <p>Not Found</p>
        }
      </div>
    </>
  );
}
