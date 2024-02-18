import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./Card"

export const Main = () => {

  const [item, setItem] = useState();
  const [url, setUrl] = useState('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=c632af0fddccdfe6e867bd401e009d45&hash=8ed9db2d8287c6a584ac78867d9332ed');

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url);
      setItem(res.data.data.results);
    }
    fetch();
  }, [url]);
  return (
    <>
      <div className="header">
          <div className="search-bar">
              <input type="search" className="search" placeholder="Search Here" />
          </div>
      </div>
      <div className="content">
        { (!item ? <p>Not Found</p> : <Card data={item} />) }
      </div>
    </>
  );
}
