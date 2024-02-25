import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.scss";

const DarkMode = () => {

    const setDarkMode = () => {
        document.querySelector('body')?.setAttribute('data-theme', 'dark');
    };
    const setLightMode = () => {
        document.querySelector('body')?.setAttribute('data-theme', 'light');
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
            />
            <label className='dark-mode-label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
