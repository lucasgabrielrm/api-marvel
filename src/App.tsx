import { Routes, Route } from 'react-router-dom';
import './components/style.scss';
import { Main } from './components/Main';
import { Marvel } from './components/Marvel';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:id' element={<Marvel />} />
      </Routes>
    </>
  );
}

export default App;
