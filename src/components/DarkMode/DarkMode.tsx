import { useEffect, useState } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import Cookies from "universal-cookie";
import "./DarkMode.scss";

const DarkMode = () => {

    const cookies = new Cookies();
    const [selectedTheme, setSelectedTheme] = useState<string>(cookies.get('colorTheme'));

    useEffect(() => {
        if (selectedTheme && selectedTheme == 'dark') setDarkMode();
        else if (selectedTheme && selectedTheme == 'light') setLightMode();
        else window.matchMedia('(prefers-color-scheme: dark)').matches ? setDarkMode() : setLightMode(); 
    }, [cookies]);

    const setDarkMode = () => {
        document.querySelector('body')?.setAttribute('data-theme', 'dark');
        cookies.set('colorTheme', 'dark');
        setSelectedTheme('dark')
    };
    const setLightMode = () => {
        document.querySelector('body')?.setAttribute('data-theme', 'light');
        cookies.set('colorTheme', 'light');
        setSelectedTheme('light')
    };

    const toggleTheme = (e: any) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    }

    return (
        <div className='dark-mode'>
            <input
                className='dark-mode-input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={selectedTheme == 'dark'}
            />
            <label className='dark-mode-label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
