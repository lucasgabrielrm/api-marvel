import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import { CharactersList } from "./Characters/CharactersList";

export const Main = () => {

  let navigate = useNavigate();
  const cookies = new Cookies();
  const publicKeyCookie = cookies.get('publicKey');
  const md5Hash = cookies.get('md5');

  useEffect(() => {
    async function checkCookies() {
      if (!md5Hash || !publicKeyCookie)
        navigate('/auth');
    }
    checkCookies();
  }, [md5Hash, publicKeyCookie, navigate]);

  return (
    <>
        {
          md5Hash && <CharactersList />
        }
    </>
  );
}
