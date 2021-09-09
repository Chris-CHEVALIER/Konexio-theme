import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Error404 from './components/Error404';
import Navbar from './components/Navbar';
import ThemeButton from './components/ThemeButton';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: localStorage.getItem("theme") || "light"
    }
  }

  changeTheme = () => {
    const newTheme = this.state.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    this.setState({
      theme: newTheme
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className={`bg-${this.state.theme} min-vh-100`}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="*" component={Error404} />
          </Switch>
          <ThemeButton theme={this.state.theme} onClick={this.changeTheme} />
        </div>
      </BrowserRouter>
    );
  }
}
