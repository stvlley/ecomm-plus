import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Checkout from './Checkout';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path = "/login" element={<Login />} />  */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


