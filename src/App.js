import logo from './logo.svg';
import './App.css';
import Rifas from './pages/Rifas';
// import WriteNumeros from "./pages/WriteNumeros"
import Numeros from './pages/Numeros';
import MostrarNumeros from './pages/MostrarNumeros';
import RoutesPrincial from './route/Router';
function App() {
  return (
    <div className="App">
      <RoutesPrincial></RoutesPrincial>
      {/* <Rifas></Rifas>
      <Numeros></Numeros> */}
      
    </div>
  );
}

export default App;
