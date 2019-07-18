import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

import BasketsPage from './components/baskets';

function App() {
  return (
    <Provider store={store}>
    <div className="App container">
    
      <BasketsPage />

    </div>
    </Provider>
  );
}

export default App;
