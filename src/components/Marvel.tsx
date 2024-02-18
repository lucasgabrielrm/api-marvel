import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const Marvel = () => {

    const { id } = useParams();
    const [item, setItem] = useState<any>();
    const fetch = async () => {
        const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=c632af0fddccdfe6e867bd401e009d45&hash=8ed9db2d8287c6a584ac78867d9332ed`);
        setItem(res.data.data.results[0]);
    }
    
    fetch();

    return (
        <>
        {
            (!item) ?
                '' :
                (
                    <div className="box-content">
                        <div className="right-box">
                            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={`${item.name} face"`} />
                        </div>
                        <div className="left-box">
                            <h1>{item.name}</h1>
                            <h4>{item.description}</h4>
                        </div>
                    </div>
                )
        }
        </>
    )
}
