import axios from "axios";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Cookies from "universal-cookie";
import { ComicsCard } from "./ComicsCard";
import { Header } from "../Header/Header";

export const ComicsList = () => {

    const cookies = new Cookies();
    const publicKeyCookie = cookies.get('publicKey');
    const md5Hash = cookies.get('md5');

    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [filterString, setFilterString] = useState('');
    const [url, setUrl] = useState(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKeyCookie}&hash=${md5Hash}&limit=50`);
    

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(url);
            setItems(res.data.data.results);
            setFilteredItems(res.data.data.results);
        }
        fetch();
    }, [url]);

    const loadMore = async () => {
        let res = (await axios.get(url + `&offset=${items.length}`)).data.data.results;
        res = items.concat(res);
        setItems(res);
        filter(filterString);
    }

    const filter = async (str: string) => {
        setFilterString(str);
        setFilteredItems(items.filter((item: any) => item.title.includes(str.toUpperCase())));
    }

    return (
        <>
            <Header />
            <div className="content">
                <div className="page-info">
                    <h2>COMICS LIST</h2>
                    <p>See a list of comics from the Marvel Comics universe.</p>
                    <div className="search-bar">
                        <input type="search" className="search" placeholder="Search Here" onChange={e => filter(e.target.value)} />
                    </div>
                </div>
            {
                (!filteredItems ? <p>Not Found</p> 
                : <InfiniteScroll dataLength={filteredItems.length} next={loadMore} hasMore={true} loader={<p>Loading...</p>}>
                    <div className="grid-items">
                        <ComicsCard data={filteredItems} />
                    </div>
                </InfiniteScroll>)
            }
            </div>
        </>
    )
}