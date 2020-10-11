import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

class App extends Component {

state = {
  page : "Home"
}

page = (newPage) => {
  this.setState({
    page : newPage
  })
}

renderPage = () => {
  if(this.state.page === "Home") return <Home />;
  else if(this.state.page === "About") return <About />;
  else if(this.state.page === "Contact") return <Contact />;
}

  render() {
    return (
      <div className="App">  
        <ul>
          <li><a onClick={() => this.page("Home")}>Home</a></li>
          <li><a onClick={() => this.page("About")}>About</a></li>
          <li><a onClick={() => this.page("Contact")}>Contact</a></li>
        </ul>
        {this.renderPage()}
      </div>
    );
  }
}

export default App;