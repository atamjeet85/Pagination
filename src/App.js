import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProductList from './ProductList';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<ProductList/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
