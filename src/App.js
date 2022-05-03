
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import InventoryItems from './components/InventoryItems/InventoryItems';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';
import ProductDetail from './ProductDetail/ProductDetail';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/update/:updateId' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>

    </div>
  );
}

export default App;
