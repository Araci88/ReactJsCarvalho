import './App.css';
import NavBar from './NavBar/NavBar';
import ItemCount from './ItemCount/ItemCount';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Footer from "./Footer/Footer"

const App = () => {

  return (
    <>
      <NavBar/>
      <ItemCount stock={15}/>
      <ItemListContainer/>
      <Footer/>
    </>
  );
}

export default App;
