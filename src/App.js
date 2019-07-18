import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import {  BrowserRouter as Router, Route } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css";

import BasketsPage from "./components/baskets";
import TopNavbar from "./components/TopNav";
import About from "./components/about";

function App() {
  return (
    <Provider store={store}>
    
    <div className="App container">
      <Router>
        <TopNavbar />
        <Route exact path="/" component={BasketsPage} />
      <Route path="/about" component={About} />
      </Router>
      
    </div>
    </Provider>
  );
}

export default App;
