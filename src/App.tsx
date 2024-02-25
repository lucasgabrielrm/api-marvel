import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './components/style.scss';
import './App.css';
import { Main } from './components/Main';
import { Auth } from './components/Auth/Auth';
import { CreatorsList } from './components/Creators/CreatorsList';
import { ComicsList } from './components/Comics/ComicsList';
import { CssBaseline, FormControlLabel, Switch, ThemeProvider, createTheme } from '@mui/material';
import Cookies from 'universal-cookie';

function App() {

  const cookies = new Cookies();
  const [darkMode, setDarkMode] =  useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    const darkModeCookie = cookies.get('darkMode');
    if (darkModeCookie == true || darkModeCookie == false) {
      setDarkMode(darkModeCookie);
    }
    console.log(darkMode);
  }, []);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#FFF' : '#000'
      },
      secondary: {
        main: darkMode ? '#000' : '#FFF'
      },
    }
  });

  const toggleDarkTheme = () => {
    cookies.set('darkMode', !darkMode);
    setDarkMode(!darkMode);
  }
  
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <FormControlLabel control={<Switch checked={darkMode} onChange={toggleDarkTheme} />} label="Dark Mode" />
        
        <Routes>
          <Route path='/' element={<Main darkMode={darkMode} />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/comics' element={<ComicsList />} />
          <Route path='/creators' element={<CreatorsList />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
