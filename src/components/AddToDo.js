import React, { Component } from 'react'

import { faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class AddToDo extends Component {
    state = {
        title: '',
        fav: false
    }

    userTyping = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    handleInputChange = (e) => {
        this.setState({fav : !this.state.fav});
    }

    submitTodo = (e) => {
        e.preventDefault();
        const newTodo = this.state.title;
        if(newTodo.trim() === ""){
            return null;
        }
        this.props.addTodo(this.state.title, this.state.fav)
        this.setState({title : ''})
        this.setState({fav : false})
    } 



    render() {
        return (
            <div>
                <h3>Add Task</h3>
                <form onSubmit={this.submitTodo} autoComplete="off">
                    <div className="formTextInput">
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
                    </div>

                    <div className="priorityCheckbox">
                    <label>
                    <input 
                        type="checkbox" 
                        name="urgent"
                        checked={this.state.fav}
                        onChange={this.handleInputChange}
                    />
                    {'Priority'}
                    </label>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddToDo
