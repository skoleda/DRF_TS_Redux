import React from "react";
import { ITodo } from "../interfeces";

type TodoListProps = {
    todos: ITodo[]
    onToggle: (id:number) => void
    onRemove: (id:number) => void
}

export const TodoList: React.FC<TodoListProps> = ({todos, onRemove, onToggle}) => {

    if(!todos.length) {
        return <p className='center'>no TODOs</p>
    }
    return(
        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                if(todo.status) {
                    classes.push('completed')
                }

                return (
                <li className={classes.join(' ')} key={todo.id}>
                    <label>
                        <input type="checkbox" checked={todo.status} onChange={() => {onToggle(todo.id)}}/>
                        <span>{todo.text}</span>
                        <i className="material-icons red-text" onClick={() => onRemove(todo.id)}>delete</i>
                    </label>
                </li>
            )})}
        </ul>
    )
}