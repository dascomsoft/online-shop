
import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from "./pages/Cart";
import Navbar from './components/Navbar';




function App() {

  
  return (
    <div className="App">
    
        <Router>
            <Navbar />
         <Routes>
            <Route path ="/" element = {<Home />}/>
            <Route path ="/About" element = {<About/>}/> 
            <Route path ="/Products" element = {<Products />}/>
            <Route path ="/Contact" element = {<Contact />}/>
            <Route path ="/Cart" element = {<Cart />}/>
        </Routes>
       
        </Router>
   
    </div>
  );
}


export default App;
