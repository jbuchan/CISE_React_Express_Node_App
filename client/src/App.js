import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" }, {count: 0};
       
    }

        
  
    makeIncrementer = amount => () =>
      this.setState(prevState => ({
        count: prevState.count + amount,
      }));
  
    increment = this.makeIncrementer(1);
  
    decrement = this.makeIncrementer(-1);  

            
    
    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to CISE</h1>
                </header>
                <p className="App-intro">{this.state.apiResponse}</p>
                <p>Count: {this.state.count}</p>
        <button className="increment" onClick={this.increment}>Increment</button>
        <button className="decrement" onClick={this.decrement}>Decrement</button>
            </div>
        );
    }

    
    }
export default App;
