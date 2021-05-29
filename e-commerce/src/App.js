import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../src/components/navigation/Navbar';
import Home from './views/Home'
import Products from './views/Products'
import ProductDetails from './views/ProductDetails'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/products/:id" component={ProductDetails}/>
        </Switch>
         
      </div>
      </BrowserRouter>
  );
}

export default App;
