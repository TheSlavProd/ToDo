import logo from './logo.svg';
import './App.css';
import User from './components/User';
import Counter from './components/Counter';
import Product from './components/Product';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Product price="1$" name="banabas" description="Fresh bananas from Ecuador"/>


      <Counter valueDef="New class component"/>
      <User name="Hayk" love="Cats" age={15} />

      </header>

      
    </div>
  );
}

export default App;
