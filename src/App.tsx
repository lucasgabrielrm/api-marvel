import { Routes, Route } from 'react-router-dom';
import './components/style.scss';
import { Main } from './components/Main';
import { Auth } from './components/Auth/Auth';
import { Marvel } from './components/Marvel';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/marvel' element={<Marvel />} />
      </Routes>
    </>
  );
}

export default App;
