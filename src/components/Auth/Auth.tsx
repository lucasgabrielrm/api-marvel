import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import './Auth.scss';

export const Auth = () => {

    const [publicKey, setPublicKey] = useState<any>();
    const [privateKey, setPrivateKey] = useState<any>();
    
    const navigate = useNavigate();
    const cookies = new Cookies();

    useEffect(() => {
      async function checkCookies() {
        const publicKeyCookie = cookies.get('publicKey');
        const privateKeyCookie = cookies.get('privateKey');
  
        if (publicKeyCookie && privateKeyCookie) navigate('/home');
      }
      checkCookies();
    }, []);

    const submit = async (e: any) => {
        e.preventDefault();

        if (publicKey && privateKey) {
            cookies.set('publicKey', publicKey);
            cookies.set('privateKey', privateKey);
            console.log('dados', publicKey, privateKey);
            navigate('/home');
        }
    };

    return (
        <div className="container">
            <input
                className="input"
                name="publicKey"
                type="text"
                placeholder="Enter Public Key"
                onChange={(e) => setPublicKey(e.target.value)}
            />
            <input
                className="input"
                name="privateKey"
                type="text"
                placeholder="Enter Private Key"
                onChange={(e) => setPrivateKey(e.target.value)}
            />
            <button className="btn" type="button" onClick={(e) => submit(e)}>
                Submit
            </button>
        </div>
    );
  }
