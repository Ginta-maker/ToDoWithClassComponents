import React, { Component } from 'react';
import TodoContainer from '../TodoContainer';
import Form from '../TodoForm';

class App extends Component {

  state = {
    data: []
  }

  changeDone = (id) => {
    const target = this.state.data.find(todo => todo.id === id);
    target.done = !target.done;
    this.setState(this.state);
  }

  addTodo = (title) => {
    const todo = {
      id: Date.now(),
      title,
      done: false
    };
    this.state.data.push(todo);
    this.setState(this.state);
  }

  deleteTodo = (id) => {
    this.state.data = this.state.data.filter(todo => todo.id !== id);
    this.setState(this.state);
  }
  
  render() {
    const {data} = this.state;
    return (
      <>
        <Form addTodo={this.addTodo}/>
        <TodoContainer 
        data={data} 
        changeDone={this.changeDone}
        deleteTodo={this.deleteTodo}/>
      </>
    )
  }
}

export default App;