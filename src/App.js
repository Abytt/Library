import logo from './logo.svg';
import './App.css';
import Addbook from './Components/Addbook';
import Search from './Components/Search';
import View from './Components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Addbook/>}/>
      <Route path='/Search' element={<Search/>}/>
      <Route path='/View' element={<View/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
