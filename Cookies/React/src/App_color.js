// Updated. Thanks to: Paul Luna
import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class App extends Component {
  state = {
    endpoint: "localhost:4002",
    color: 'orange'
  };

  // sending sockets
  send = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('change color', this.state.color) // change 'red' to this.state.color
  }
  ///

  // adding the function
  setColor = (color) => {
    this.setState({ color })
  }

  componentDidMount = () => {
      const socket = socketIOClient(this.state.endpoint);
      setInterval(this.send(), 1000)
    
      socket.on('change color', (col) => {
          document.body.style.backgroundColor = col
      })
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={() => this.send() }>Change Color</button>
        <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
        <button id="red" onClick={() => this.setColor('red')}>Red</button>
        <button id="green" onClick={() => this.setColor('green')}>Green</button>
      </div>
    )
  }
}
export default App;



//https://codeburst.io/isomorphic-web-app-react-js-express-socket-io-e2f03a469cd3

//// testing for socket connections
//const socket = socketIOClient(this.state.endpoint);
