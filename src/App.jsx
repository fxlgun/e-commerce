/* eslint-disable no-unused-vars */
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from "../src/pages/Success"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Orders from "./pages/Orders";



const App = () => {
  const user = useSelector((state) => state.user.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          {user ? <Redirect to='/' /> : <Login />}
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to='/login' />}
        </Route>
        <Route path="/products/:category">
          {user ? <ProductList /> : <Redirect to='/login' />}
        </Route>
        <Route path="/products">
          {user ? <ProductList /> : <Redirect to='/login' />}
        </Route>
        <Route path="/cart">
          {user ? <Cart /> : <Redirect to='/login' />}
        </Route>
        <Route path="/product/:id">
          {user ? <Product /> : <Redirect to='/login' />}
        </Route>
        <Route path="/success">
          {user ? <Success /> : <Redirect to='/login' />}
        </Route>
        <Route path="/orders">
          {user ? <Orders /> : <Redirect to='/login' />}
        </Route>
      </Switch>
    </Router>
  );

}

export default App;