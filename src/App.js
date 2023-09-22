import logo from './database_error.svg';
import './App.css';

import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Mensaje de alerta </h3>
        <p>
        Whirlpool - 24.7 Cu. Ft. French Door Refrigerator in Stainless Steel
        </p>

        <div className='btns-container'>
          <Button type={"secondary"}>cancelar</Button>
          <Button type={"danger"}>eliminar</Button>
        </div>  
      </header>
    </div>
  );
}

export default App;
