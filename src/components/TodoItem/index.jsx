import React, { Component } from 'react'
import styles from './style.module.sass'

export default class ToDoItem extends Component {
  render() {
    const {id, title, done, changeDone, deleteTodo} = this.props;
    const style = {
      textDecoration: 'line-through'}
    return (
      <div onClick={()=>changeDone(id)}
        onDoubleClick={()=>deleteTodo(id)} 
        style={done ? style : {}} 
        className={styles.item}>
        <p>{title}</p>
      </div>
    )
  }
}
