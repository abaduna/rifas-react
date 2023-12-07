import logo from './logo.svg';
import './App.css';
import Rifas from './pages/Rifas';
// import WriteNumeros from "./pages/WriteNumeros"
import Numeros from './pages/Numeros';
import MostrarNumeros from './pages/MostrarNumeros';
function App() {
  return (
    <div className="App">
      <Rifas></Rifas>
      <Numeros></Numeros>
      <MostrarNumeros></MostrarNumeros>
    </div>
  );
}

export default App;
