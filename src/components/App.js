import React from 'react'

import '../styles/App.css';


class App extends React.Component {

  handleClick(){
    this.setState({count: this.state.count+1})
    
  }
  constructor(props){
    super(props)
    this.state = {count:0}
    this.handleClick = this.handleClick.bind(this);

  }


  
  render() {
    console.log('rendered')
    
    return (
      console.log("mounted")
      <div id="main">
      console.log("mounted")
          <div id="count">{this.state.count}</div>
          <button id="incr" onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}


export default App;
