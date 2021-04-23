
import './App.css';

import Products from './components/Products'
import NavbarComponent from './components/NavbarComponent'
import Home from './components/Home'
import Product from './components/Product'
import Cart from './components/Cart'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';
import ProductDelete from './components/ProductDelete';

function App() {

  return (
    <Router>
      <div className="App">
        <NavbarComponent/>
        <div className="content">
          <Switch>

            <Route exact path="/" >
              <Home/>
            </Route>

            <Route exact path="/products">
              <Products/>
            </Route>

            <Route exact path="/products/:product_id">
              <Product/>
            </Route>

            <Route exact path="/products/del/:product_id">
              <ProductDelete/>
            </Route>

            <Route exact path="/cart">
              <Cart/>
            </Route>
            
          </Switch>

        </div>

      </div>

    </Router>
    
  );
}

export default App;
