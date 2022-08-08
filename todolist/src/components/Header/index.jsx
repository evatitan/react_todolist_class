import React from 'react';
import PropTypes from "prop-types";
import {nanoid} from "nanoid";
import "./index.css";


export default class Header extends React.Component {

    static propTypes={
        addTodo:PropTypes.func.isRequired
    }

    handleKeyUp=(event)=>{
        const {keyCode,target} = event;
        if (keyCode !==13) return ;
        if(target.value.trim() ===""){
            alert("Todo can not be empty")
        } else{
            const todoObj={id:nanoid(),name:target.value,done:false};
            this.props.addTodo(todoObj)
        }
        target.value ="";
    }

    render() {
        return (
            <div className="todo_header">
                <h2>Todo List</h2>
                <input onKeyUp={this.handleKeyUp} type="text" id="newTodo" placeholder="Please write a new todo and push ENTER"/>
            </div>
        )
    }
}
