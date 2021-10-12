import logo from './logo.svg';
import './App.css';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <User name="Hayk" love="Cats" age={15} />

      </header>
    </div>
  );
}

export default App;
