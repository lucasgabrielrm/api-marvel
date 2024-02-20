import axios from "axios";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Cookies from "universal-cookie";
import { ComicsCard } from "./ComicsCard";

export const ComicsList = () => {

    const cookies = new Cookies();
    const publicKeyCookie = cookies.get('publicKey');
    const md5Hash = cookies.get('md5');

    const [item, setItem] = useState([]);
    const [url, setUrl] = useState(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKeyCookie}&hash=${md5Hash}&limit=5`);
    

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(url);
            setItem(res.data.data.results);
            console.log('RES', res);
        }
        fetch();
    }, []);

        const loadMore = async () => {
            let res = (await axios.get(url + `&offset=${item.length}`)).data.data.results;
            res = item.concat(res);
            setItem(res);
            console.log('ITEM', item);
        }

    return (
        <>
        {
            (!item ? <p>Not Found</p> 
            : <InfiniteScroll dataLength={item.length} next={loadMore} hasMore={true} loader={<p>Loading...</p>}>
                <div className="grid-items">
                    <ComicsCard data={item} />
                </div>
            </InfiniteScroll>)
        }
        </>
    )
}