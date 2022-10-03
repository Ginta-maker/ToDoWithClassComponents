import React, { Component } from 'react';
import style from './style.module.sass';

export default class Form extends Component {

    submit = event => {
        event.preventDefault();
        const {addTodo} = this.props;
        const {title} = event.target;
        addTodo(title.value);
        title.value = '';
    }

  render() {

    return (
      <form onSubmit={this.submit} className={style.form}>
        <input type="text" placeholder='what is to be done' name="title"/>
        <button>Add</button>
      </form>
    )
  }
}
