import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Friends from './components/Friends/Friends';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header></Header>


        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>



          <Route>
            <NotFound></NotFound>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
