import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'universal-cookie';
import { Card } from "./Card"

export const Main = () => {

  let navigate = useNavigate();
  const cookies = new Cookies();

  const [item, setItem] = useState();
  const [url, setUrl] = useState('http://gateway.marvel.com/v1/public/characters?limit=21&ts=1&apikey=c632af0fddccdfe6e867bd401e009d45&hash=8ed9db2d8287c6a584ac78867d9332ed');

  const getCharacters = () => {
    const fetch = async () => {
      const res = await axios.get(url);
      setItem(res.data.data.results);
    }
    fetch();
  };

  useEffect(() => {
    async function checkCookies() {
      const publicKeyCookie = cookies.get('publicKey');
      const privateKeyCookie = cookies.get('privateKey');

      if (!publicKeyCookie || !privateKeyCookie) navigate('/auth');
      else getCharacters();
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
        { (!item ? <p>Not Found</p> : <Card data={item} />) }
      </div>
    </>
  );
}
