import { Routes, Route } from 'react-router-dom';
import './components/style.scss';
import { Main } from './components/Main';
import { Auth } from './components/Auth/Auth';
import { CreatorsList } from './components/Creators/CreatorsList';
import { ComicsList } from './components/Comics/ComicsList';
import { Marvel } from './components/Marvel';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/comics' element={<ComicsList />} />
        <Route path='/creators' element={<CreatorsList />} />
        <Route path='/marvel' element={<Marvel />} />
      </Routes>
    </>
  );
}

export default App;
