import logo from './logo.svg';
import './App.css';
import Termekek from './Termekek/Termekek.js';
import {TERMEKLISTA} from "./Termekek/Termek/TermekLista.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WEBÁRUHÁZ TERMÉKEI</h1>
      </header>
      <article>
        <Termekek termekek = {TERMEKLISTA}/>
      </article>
    </div>
  );
}

export default App;
