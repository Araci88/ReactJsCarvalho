import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import Footer from "./Footer/Footer"


const App = () => {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/product/:idProducto' element={<ItemDetailContainer/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          <Route path='/cart'element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
