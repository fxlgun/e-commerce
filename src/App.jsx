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
 console.log(user);    
  return (
    <Router>
     <Switch>
      <Route exact path="/login">
        {user ? <Redirect to= '/'/> : <Login/>}
      </Route>
      <Route path="/register">
        <Register/>
      </Route>
      <Route exact path="/">
        {user ? <Home/> : <Redirect to= '/login'/>}
      </Route>
      <Route path="/products/:category">
        <ProductList/>
      </Route>
      <Route path="/cart">
        <Cart/>
      </Route>
      <Route path="/product/:id" component={Product} />
      <Route path="/success" component={Success} />
      <Route path="/orders" component={Orders} />
     </Switch>      
    </Router>
    );
    
}

export default App;