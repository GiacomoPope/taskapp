import React, { Component } from 'react'
import ToDoItem from './ToDoItem.js'
class ToDos extends Component {

    getHeader = (dataSet) =>{
        return{
            display: dataSet.length > 0 ? "block" : "none"
        }
    }

    render() {
        const favTodoItems = this.props.todoItems.filter(todoItems => todoItems.fav && !todoItems.completed)
        const currentTodos = this.props.todoItems.filter(todoItems => !todoItems.completed && !todoItems.fav)
        const todones = this.props.todoItems.filter(todoItems => todoItems.completed)
        
        return(
            <div className="todoList">
            <h3 style={this.getHeader(favTodoItems)}>Urgent Tasks</h3>
            {favTodoItems.map((todoItem) => (
                <ToDoItem 
                    key={todoItem.id} 
                    todoItem={todoItem} 
                    toggleComplete={this.props.toggleComplete} 
                    deleteTodo={this.props.deleteTodo}
                    toggleFav={this.props.toggleFav}
                />
            ))}
            <h3 style={this.getHeader(currentTodos)}>Current Tasks</h3>
            {currentTodos.map((todoItem) => (
                <ToDoItem 
                    key={todoItem.id} 
                    todoItem={todoItem} 
                    toggleComplete={this.props.toggleComplete} 
                    deleteTodo={this.props.deleteTodo}
                    toggleFav={this.props.toggleFav}
                />
            ))}
           <h3 style={this.getHeader(todones)}>Completed Tasks</h3>
            {todones.map((todoItem) => (
                <ToDoItem 
                    key={todoItem.id} 
                    todoItem={todoItem} 
                    toggleComplete={this.props.toggleComplete} 
                    deleteTodo={this.props.deleteTodo}
                    toggleFav={this.props.toggleFav}
                />
            ))}
            </div>
        );
    }
}

export default ToDos;