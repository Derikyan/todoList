import React from 'react';
import './todoItem.scss';
import { useDispatch } from 'react-redux';
import { changeComplete, deleteComplete } from '../../features/todo/todoSlice';

const TodoItem = ({todo}) => {

    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(changeComplete({taskId: todo.id, isCompleted:!todo.completed}));
    }
    
    const deleteTask = () => {
        dispatch(deleteComplete(todo.id));
    }

    return (
        <div className='todoItem'>
            <label>
                <input type='checkbox' defaultChecked={todo.completed} onChange={handleChange}/>
                <span>{todo.todo}</span>
            </label>
            <span className='x' onClick={deleteTask}>X</span>
        </div>
    )
}

export default TodoItem;