import { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from "axios";
import { CharactersCard } from "./CharactersCard"
import { Header } from "../Header/Header";
import './CharactersList.scss';

export const CharactersList = (props: any) => {

    const [item, setItem] = useState([]);
    const [url, setUrl] = useState(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${props.publicKeyCookie}&hash=${props.md5Hash}`);

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(url);
            setItem(res.data.data.results);
        }
        fetch();
    }, [url]);

    const loadMore = async () => {
        let res = (await axios.get(url + `&offset=${item.length}`)).data.data.results;
        res = item.concat(res);
        setItem(res);
    }

    return (
        <>
            <Header />
            <div className="content">
                <div className="page-info">
                    <h2>CHARACTERS LIST</h2>
                    <p>See all characters from the Marvel Comics universe.</p>
                </div>
                {
                    (!item ? <p>Not Found</p> 
                    : <InfiniteScroll dataLength={item.length} next={loadMore} hasMore={true} loader={<p>Loading...</p>}>
                        <div className="grid-items">
                            <CharactersCard data={item} />
                        </div>
                    </InfiniteScroll>)
                }
            </div>
        </>
    )
}