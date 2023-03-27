import logo from './logo.svg';
import './App.css';
import ButtonComponents from './components/ButtonComponent';
import ClassComponent from './components/ImageComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
        <ButtonComponents prova = "Ciao" />
          
        </p>
     
        <ClassComponent image ="http://placekitten.com/200/400"/>
      </header>
    </div>
  );
}

export default App;
