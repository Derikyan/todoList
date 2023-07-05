import './todo.scss';
import {
    selectAll,
    selectLoading,
    getAll,
    addNewTask,
} from '../../features/todo/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import TodoItem from '../todoItem/TodoItem';

const Todo = () => {

    const todoList = useSelector(selectAll);
    const isLoading = useSelector(selectLoading);

    const dispatch = useDispatch();
    const inpRef = useRef();
    
    const add = () => {
        dispatch(addNewTask(inpRef.current.value));
        inpRef.current.value = '';
    }

    useEffect(()=>{
        dispatch(getAll());
    },[dispatch])

    return(
        <div className='todo'>
            <div className='inputBox'>
                <input type='text' name='value' ref={inpRef} />
                <input type='submit' onClick={add} value='Add' />
            </div>
            {isLoading ?
            <span>Loading...</span>
            :
            <div className='todoList'>
                {todoList.length && todoList.map((todo)=>{
                    return <TodoItem todo={todo} key={todo.id}/>
                })}
            </div>
            }
        </div>
    )
}

export default Todo;