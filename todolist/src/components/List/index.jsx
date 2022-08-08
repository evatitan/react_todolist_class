import React from 'react';
import PropTypes from 'prop-types';
import Item from "../Item";
import "./index.css";

export default class List extends React.Component {
    static propTypes={
        updateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired,
        todos:PropTypes.array.isRequired
    }
    render() {
        const {todos, updateTodo,deleteTodo}= this.props
        return (
            <ul className="todo_list">
                {
                    todos.map((todoObj)=>{
                        return <Item key={todoObj.id} {...todoObj} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        )
    }
}
