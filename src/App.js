import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar} from './components/navbar'
import {Shop} from './pages/shop'
import {Cart} from './pages/cart'

function App() {
  return (
    //dynamic routing for product pages
    <div className="App">
      <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
