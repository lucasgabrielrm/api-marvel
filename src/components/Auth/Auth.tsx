import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import './Auth.scss';
import md5 from 'md5';
import { Header } from '../Header/Header';

export const Auth = () => {

    const [publicKey, setPublicKey] = useState<any>();
    const [privateKey, setPrivateKey] = useState<any>();
    const [md5Hash, setMd5Hash] = useState<any>();
    
    const navigate = useNavigate();
    const cookies = new Cookies();

    useEffect(() => {
      async function checkCookies() {
        setMd5Hash(cookies.get('md5'));
      }
      checkCookies();
    }, []);

    const submit = async (event: any) => {
        event.preventDefault();

        if (publicKey && privateKey) {
            cookies.set('publicKey', publicKey);
            convertToMd5();
            navigate('/');
        } else alert('You need to fill both Public and Private Keys.');
    };

    const convertToMd5 = () => {
        const hash = md5('1' + privateKey + publicKey);
        setMd5Hash(hash);
        cookies.set('md5', hash);
    };

    return (
        <>
            { md5Hash ? <Header /> : <Header hideNavbar={true} /> }
            <div className="content">
                <div className="page-info">
                    <h2>AUTHENTICATION</h2>
                    <p>Enter your public and private keys from <a href='https://developer.marvel.com/'>Marvel API</a>.</p>
                </div>
                <input
                    className="input"
                    name="publicKey"
                    type="text"
                    placeholder="Enter Public Key"
                    onChange={(event) => setPublicKey(event.target.value)}
                />
                <input
                    className="input"
                    name="privateKey"
                    type="text"
                    placeholder="Enter Private Key"
                    onChange={(event) => setPrivateKey(event.target.value)}
                />
                <button className="btn" type="button" onClick={(event) => submit(event)}>
                    Submit
                </button>
            </div>
        </>
    );
  }
