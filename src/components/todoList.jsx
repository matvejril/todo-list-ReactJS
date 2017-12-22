import React, { Component } from 'react';

import TodoItem from './todoItem';

export default class TodoList extends Component {
    render () {
        return (
            <div className="todo-list">
                <div className="container">
                    {this.props.list.map((todo, index) => {
                        return (
                            <TodoItem dispatch={this.props.dispatch} todo={todo} num={index + 1} key={index} />
                        )
                    })}
                </div>
            </div>
        )
    }
}
