import React from 'react';
import './App.css';
import {Banner} from './Navbar'
import Navbar from './Navbar';
import {Provider} from 'react-redux';
import ProductsContext from './Product'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {createStore} from 'redux';
import Cart from './Cart'
import Basket from './Cart2'
import reducer from './Reducer/Reducer'
const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <Navbar></Navbar>
    <Banner></Banner>
   
      <Switch>
        <Route path='/' exact component={ProductsContext}></Route>
        <Route path='/cart/:id' exact component={Cart}></Route>
        <Route path='/basket' exact component={Basket}></Route>
        </Switch>
     
    </BrowserRouter>
    </Provider>
    </>
     );
}

export default App;
