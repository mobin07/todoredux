import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import CounterApp from './pages/CounterApp';
import TododApp from './pages/TododApp';
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<CounterApp/>} ></Route>
        <Route path='/todoapp' element={<TododApp/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
