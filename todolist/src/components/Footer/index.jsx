import React from 'react';
import PropTypes from 'prop-types';
import "./index.css"

export default class Footer extends React.Component {
    static propTypes={
        checkAllTodo:PropTypes.func.isRequired,
        deleteAllDoneTodo:PropTypes.func.isRequired,
        todos:PropTypes.array.isRequired
    }

    handleCheckAll=(event)=>{
        this.props.checkAllTodo(event.target.checked)
    }

    deleteAllDone=()=>{
        this.props.deleteAllDoneTodo()
    }

    render() {
        const {todos}=this.props;
        let allTodos = todos.length;
        let doneTodos = todos.reduce((pre,todo)=>{
            if(todo.done===true){
                return pre+1
            }else{
                return pre+0
            }
        },0)

        return (
            <div className="todo_footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneTodos ===allTodos && allTodos!==0 ? true : false}/>
                </label>
                <span>
                 <span className="footer_info"> Done {doneTodos}  / All {allTodos} </span>
                </span>
                <button onClick={this.deleteAllDone} className="todo_btn">Clear All Done</button>
            </div>
        )
    }
}

