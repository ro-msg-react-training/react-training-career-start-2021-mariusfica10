import React from "react";
import { Typography } from "@material-ui/core";
import mainStyles from "./styles/main";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchAppBar from "./components/SearchAppBar";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductPage from "./components/Product";
import ProductDelete from "./components/ProductDelete";
import Cart from "./components/Cart";
import LoginForm from "./components/Login";
import CartItemView from "./components/CartItem";
import AddForm from "./components/AddForm";
import UpdateForm from "./components/UpdateForm";
import Register from "./components/Register";
import Order from "./components/Order";

function App() {
  const classes = mainStyles();
  return (
    <Router>
      <SearchAppBar />
      <div className={classes.root}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/products/:productID">
            <ProductPage />
          </Route>

          <Route exact path="/products/delete/:productID">
            <ProductDelete />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>

          <Route exact path="/login">
            <LoginForm />
          </Route>

          <Route exact path="/products/add/item">
            <AddForm />
          </Route>

          <Route exact path="/products/update/:productID">
            <UpdateForm />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/order">
            <Order />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
