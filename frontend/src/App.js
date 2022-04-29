import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-Container">
        <div className="App-Content">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-links">
          <a className="App-link" href="https://admin.colorfully.mn"
            target="_blank" rel="noopener noreferrer">
            Админ
          </a>  
          <a className="App-link" href="https://colorfully.mn"
            target="_blank" rel="noopener noreferrer">
            Хэрэглэгч
          </a> 
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
