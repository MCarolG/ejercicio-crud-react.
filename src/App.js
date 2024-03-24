import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import UsuariosProductos from './components/UsuariosProductos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UsuariosProductos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
