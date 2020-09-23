import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import ToDos from './components/ToDos.js';
import AddToDo from './components/AddToDo.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';


const LOCAL_STORAGE_KEY = 'todoData.items';

class App extends Component {

  state = {
    todoData: []
  }

  componentDidMount() {
    const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(savedData){
      this.setState({todoData : savedData})
    }
  }

  componentDidUpdate() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state.todoData));
  }

  toggleComplete = (id) => {
    const newToDoData = [...this.state.todoData];
    const newToDo = newToDoData.find(newToDo => newToDo.id === id)
    newToDo.completed = !newToDo.completed
    this.setState({todoData : newToDoData})
  }

  toggleFav = (id) => {
    const newToDoData = [...this.state.todoData];
    const newToDo = newToDoData.find(newToDo => newToDo.id === id)
    newToDo.fav = !newToDo.fav
    this.setState({todoData : newToDoData})
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
      fav : false,
    }
    const newToDoData = [newTodo, ...this.state.todoData];
    this.setState({todoData : newToDoData})
  }

  deleteTodo = (id) =>{
    const newToDoData = [...this.state.todoData.filter(todoItem => todoItem.id !== id)];
    this.setState({todoData : newToDoData})
  } 


  render(){
    return(
      <div className="siteWrapper">
      <div className="appWrapper">
        <Header />
        <AddToDo
          addTodo={this.addTodo} 
        />
        <ToDos 
          todoItems={this.state.todoData} 
          toggleComplete={this.toggleComplete} 
          deleteTodo={this.deleteTodo}
          toggleFav={this.toggleFav}
        />
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;
