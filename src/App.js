import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";
import Counter from "./components/Counter";
import Product from "./components/Product";
import Input from "./input/Input";
import Todo from "./components/pages/Todo";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/menu/Menu";
import { NotFound } from "./components/pages/NotFound";
import { Contact } from "./components/pages/Contact";
import { About } from "./components/pages/About";
import SingleTask from "./components/pages/SingleTask";
import Naymax from "./components/pages/naymax/Naymax";
function App() {
  /*
  const fruits = [
    {
      id: 1,
      name: "Banana",
      desc: "Fresh bananas from Ecuador",
      price: "15$",
      icon: "🍌",
    },

    {
      id: 2,
      name: "Apple",
      desc: "Fresh apple from Ecuador",
      price: "20$",
      icon: "🍎",
    },
    {
      id: 3,
      name: "Avocado",
      desc: "Fresh avocado from Ecuador",
      price: "30$",
      icon: "🥑",
    },
    {
      id: 4,
      name: "Limon",
      desc: "Fresh limon from Ecuador",
      price: "500$",
      icon: "🍋",
    },
  ];

  const li = fruits.map((el) => {
    return (
      <li key={el.id}>
        {" "}
        <Product
          price={el.price}
          name={el.name}
          description={el.desc}
          icon={el.icon}
        />
      </li>
    );
  });   */

  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Naymax />} />
          <Route path="/home" element={<Naymax />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/task/:id" element={<SingleTask />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

      {/*
        
      <header className="App-header">
      <Input/>
        <ol>
          <br />
          {li}
        </ol>

        <br />
        {
        <Product
          price="450$"
          name="Banan"
          description="Fresh bananas from Ecuador" /> 

        <Counter valueDef="New class component" />

        <User name="Hayk" love="Cats" age={15} />
      </header>  */}
    </div>
  );
}

export default App;
