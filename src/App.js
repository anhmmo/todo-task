import React, { Component } from 'react';
import './App.css';

function nsdgsg() {
    console.log("hello");
}

nsdgsg();

class App extends Component {

  constructor(props) {
   
    super(props);
    this.state = {
      userName: "Adam",
      todoItems: [{ action: "Buy Flowers", done: false },
                  { action: "Get Shoes", done: false },
                  { action: "Collect Tickets", done: true },
                  { action: "Call Joe", done: false }],
      newItemText: ""
    }
    
  }

  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value });
  }

  createNewTodo = () => {
    if (!this.state.todoItems.find(item => item.action === this.state.newItemText)) {
      this.setState({
      todoItems: [...this.state.todoItems,
      { action: this.state.newItemText, done: false }],
      newItemText: ""
      });
    }
  }


  toggleTodo = (todoItem) => this.setState({ todoItems:
    this.state.todoItems.map(item => item.action === todoItem.action ? { ...item, done: item.done === false } : item) });

  todoTableRows = () => this.state.todoItems.map(item =>
    <tr key={ item.action }>
      <td>{ item.action}</td>
      <td>
        <input type="checkbox" checked={ item.done }
        onChange={ () => this.toggleTodo(item) } />
      </td>
    </tr> );
  
  render = () => {
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          { this.state.userName }'s To Do List
          ({ this.state.todoItems.filter(item => item.done === false).length} items to do)
        </h4>

        <div className="container-fluid">
          <div className="my-1">
            <input className="form-control"
              value={ this.state.newItemText }
              onChange={ this.updateNewTextValue } />
            <button className="btn btn-primary mt-1"
              onClick={ this.createNewTodo }>Add</button>
          </div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr><th>Description</th><th>Done</th></tr>
            </thead>
            <tbody>{ this.todoTableRows() }</tbody>
          </table>
        </div>
      </div>
    );
  }

}

export default App;

