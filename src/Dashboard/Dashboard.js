/*import React , { Component } from 'react';
import fire from './firebase';
//import fire from './firebase';

class Dashboard extends Component{

  state = {
    text : " "
  }
  
  handleText=e=>{
    this.setState({
      text : e.target.value
    })
  }
  handleSubmit=e=>{
    fire.database().ref('messages').orderByKey().limitToLast(100);
    fire.database().ref('messages').push(this.state.text);
    this.setState({
      text : " "
    })
  }
   

  render(){
    return(
      <div className="App-header">
        <input type ="text" onChange={this.handleText} id="inputText"/>
        <br></br>
        <button onClick={this.handleSubmit}>Save</button>
    </div>
    );
  }
}

export default Dashboard;*/