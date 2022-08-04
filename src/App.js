import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer';

function App() {
  return (
    <>    
    <NavBar/>
         <Routes>        
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId'  element={<ItemListContainer />} />
          <Route path='/itemdetail/:itemId'  element={<ItemDetailContainer />} />
        </Routes>
    <Footer />
    </>

  );
}

export default App;
