import React from "react";
import { Provider } from "react-redux";
import Store from "./store";
import Router from "./router";
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
          <Router />
      </Provider>
    </div>
  );
}

export default App;
