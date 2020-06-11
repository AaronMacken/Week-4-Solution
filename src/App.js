import React from "react";
import "./App.css";
import AddUser from "./AddUser";
import User from "./Users";
import { Provider } from "react-redux";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      // Wrap application in Provider component
      // state will be provided to any component that needs it
      // store is where the state lives
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>Form State, Spread Syntax, Ternary Operator</h1>
          </header>
          <AddUser />
          <hr />
          <User />
        </div>
      </Provider>
    );
  }
}

export default App;
