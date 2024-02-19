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
        setPublicKey(cookies.get('publicKey'));
        setPrivateKey(cookies.get('privateKey'));
      }
      checkCookies();
    }, []);

    const submit = async (event: any) => {
        event.preventDefault();

        if (publicKey && privateKey) {
            cookies.set('publicKey', publicKey);
            cookies.set('privateKey', privateKey);
            navigate('/');
        } else alert('You need to fill both Public and Private Keys.')
    };

    return (
        <div className="container">
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
            {(
                publicKey && privateKey ? 
                    <button className="btn" type="button" onClick={(event) => navigate('/')}>
                        Back
                    </button> : ''
            )}
        </div>
    );
  }
