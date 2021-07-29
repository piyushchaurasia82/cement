import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Allproducts from './Allproducts';
import Productdetails from './Productdetails';
import Login from './Login';
import Cart from './Cart';
import PageNotFound from './PageNotFound';
import './App.css';

function App() {
  return (

<Header/>,
   <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Home" component={Home}/>
      <Route exact path="/Allproducts" component={Allproducts}/>
      <Route exact path="/Productdetails" component={Productdetails}/>
      <Route exact path="/Login" component={Login}/>
      <Route exact path="/Cart" component={Cart}/>
      <Route component={PageNotFound} />

      </Switch>
   </BrowserRouter>

  );
}



export default App;
