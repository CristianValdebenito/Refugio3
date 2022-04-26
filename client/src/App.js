import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './views/Main';
import Detalle from './views/Detalle';
import Actualiza from './views/Actualiza';
import Agregar from './views/Agregar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/detalle/:id" element={ <Detalle/>}/>
          <Route exact path="/edit/:id" element={<Actualiza/>}/>
          <Route exact path="/agregar" element={<Agregar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;