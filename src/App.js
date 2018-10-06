import React, { Component, Fragment, createContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Toggle } from "Utilities";
import { Modal } from "Elements";

const UserContext = createContext();

class UserProvider extends Component {
  state = {
    id: "123",
    name: "scott",
    mail: "email"
  };
  render() {
    return (
      <UserContext.Provider value={{ user: this.state }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <UserProvider>
        <UserContext.Consumer>
          {context => (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
              </header>
              <Toggle>
                {({ on, toggle }) => (
                  <Fragment>
                    <button onClick={toggle}>Login</button>
                    <Modal on={on} toggle={toggle}>
                      <h1>Still in modal</h1>
                    </Modal>
                  </Fragment>
                )}
              </Toggle>
              <h3>{context && context.user.name}</h3>
            </div>
          )}
        </UserContext.Consumer>
      </UserProvider>
    );
  }
}

export default App;
