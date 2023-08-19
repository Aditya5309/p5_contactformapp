import logo from './logo.svg';
import './App.css';
import Doubt from "./Doubt";
import View from "./View"
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Doubt/>} />
        <Route path="/view" element={<View/>} />
        <Route path="*" element={ <Doubt/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
