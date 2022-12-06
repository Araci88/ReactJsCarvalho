import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
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
          <Route path='/cart'/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
