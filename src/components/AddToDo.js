import React, { Component } from 'react'

import { faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class AddToDo extends Component {
    state = {
        title: ''
    }

    userTyping = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    submitTodo = (e) => {
        e.preventDefault();
        const newTodo = this.state.title;
        if(newTodo.trim() === ""){
            return null;
        }
        this.props.addTodo(this.state.title)
        this.setState({title : ''})
    } 

    render() {
        return (
            <div>
                <h3>Add Task</h3>
                <form onSubmit={this.submitTodo}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder=""
                    value={this.state.title}
                    onChange={this.userTyping}
                />
                <button type="submit" className="submitBtn">
                <FontAwesomeIcon icon={faPlus} />
                </button>
                </form>
            </div>
        )
    }
}

export default AddToDo
