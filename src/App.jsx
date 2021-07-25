import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Contactus from './Contactus';
import Footer from './Footer';
import Gallery from './Gallery';
import Header from './Header';
import Home from './Home';
import Products from './Products';
import Query from './Query';
const App =()=>{
  return(
    <>
    <div class="container">
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Products" component={Products}/>
        <Route exact path="/Contactus" component={Contactus}/>
        <Route exact path="/Gallery" component={Gallery}/>
        <Route exact path="/Query" component={Query}/>
      </Switch>
    </div>
    <Footer/>
    </>
  );
}
export default App;