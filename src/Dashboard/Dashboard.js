import React , { Component } from 'react';
import fire from './firebase';
 
class Dashboard extends Component{
 
  state = {
    text : " ",
    budget : " ",
    expenses: " ",
    month: " "
  }
  
  handleText=e=>{
    this.setState({
      text : e.target.value
 
    })
  }
 
  handleBudget=e=>{
    this.setState({
      budget : e.target.value
 
    })
  }
 
  handleExpenses=e=>{
    this.setState({
      expenses : e.target.value
 
    })
  }
 
  handleMonth=e=>{
    this.setState({
      month : e.target.value
 
    })
  }
 
  
  handleSubmit=e=>{
    fire.database().ref('chartdata').orderByKey().limitToLast(100);
    fire.database().ref('chartdata').push(this.state.text);
    fire.database().ref('chartdata').orderByKey().limitToLast(100);
    fire.database().ref('chartdata').push(this.state.budget);
    fire.database().ref('chartdata').orderByKey().limitToLast(100);
    fire.database().ref('chartdata').push(this.state.expenses);
    fire.database().ref('chartdata').orderByKey().limitToLast(100);
    fire.database().ref('chartdata').push(this.state.month);
    this.setState({
      text : " ",
      budget: " ",
      expenses: " ",
      month: " "
    })
  }
   
 
  render(){
    return(
      <div className="">
        <br></br>
        <br></br>
        <label>Item: </label>
        <input type ="text" onChange={this.handleText} id="inputText"/>
        <br></br>
        <br></br>
        <label>Budget: </label>
        <input type ="number" onChange={this.handleBudget} id="inputAmount"/>
        <br></br>
        <br></br>
        <label>Expenses: </label>
        <input type ="number" onChange={this.handleExpenses} id="inputExpenses"/>
        <br></br>
        <br></br>
        <label>Month(Number of the Month only): </label>
        <input type ="number" onChange={this.handleMonth} id="inputMonth"/>
        <br></br>
        <br></br>
        <button onClick={this.handleSubmit}>Submit</button>
        <p>The data gets inputted through firebase realtime database but the chart isn't given );</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>
    );
  }
}
 
export default Dashboard;

