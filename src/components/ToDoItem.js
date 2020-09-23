import React, { Component } from 'react'

// get our fontawesome imports
import { faTrash, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ToDoItem extends Component {
    getStyle = () => {
        return{
            opacity: this.props.todoItem.completed ? '0.65' : '1'
        }
    }

    getFavStar = () => {
        return{
            color: this.props.todoItem.fav ? "#ffc600" : "c4cbe2"
        }
    }

    render() {
        const {id, title} = this.props.todoItem;
        return (
            <div className="todoItem" style={this.getStyle()}>
                <p>
                <label>
                    <input 
                        type="checkbox"
                        checked={this.props.todoItem.completed}
                        onChange={this.props.toggleComplete.bind(this, id)}
                    /> 
                    {' '}
                    {title}
                </label>
                </p>
                <div>
                <button
                    className="favBtn" 
                    onClick={this.props.toggleFav.bind(this, id)}
                    style={this.getFavStar()}
                >
                <FontAwesomeIcon icon={faStar} />
                </button>

                <button
                    className="deleteBtn" 
                    onClick={this.props.deleteTodo.bind(this, id)}
                >
                <FontAwesomeIcon icon={faTrash} />
                </button>
                </div>
            </div>
        )
    }
}

export default ToDoItem
