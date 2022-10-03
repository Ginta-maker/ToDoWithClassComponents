import React, { Component } from 'react';
import ToDoItem from '../TodoItem';
import style from './style.module.sass';

export default class TodoContainer extends Component {
    render () {
        const {data, changeDone, deleteTodo} = this.props;
        return (
            <div className={style.container}>
                {
                    data.map(todo => 
                    <ToDoItem key={todo.id} 
                    {...todo} 
                    changeDone={changeDone} 
                    deleteTodo={deleteTodo}/>)
                }
            </div>
        )
    }
}
