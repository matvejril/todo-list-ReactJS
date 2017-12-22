import React, { Component } from 'react';

import { format } from "../helpers/date";
import removeTodo from '../actions/removeTodo';
import selectTodo from '../actions/selectTodo';
import performanceTodo from '../actions/performanceTodo';

export default class TodoItem extends Component {
    handlerRemove = () => {
        const { id } = this.props.todo;
        this.props.dispatch(removeTodo(id));
    };

    handlerSelect = () => {
        const { id } = this.props.todo;
        this.props.dispatch(selectTodo(id));
    };

    handlerPerformance = () => {
        const { id } = this.props.todo;
        this.props.dispatch(performanceTodo(id));
    };

    render () {
        return (
            <div className="row todo-item">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-sm-4">
                            <p className="todo-item__number">№ {this.props.num}.</p>
                            <p className="todo-item__name">{this.props.todo.name}</p>
                        </div>
                        <div className="col-sm-4">
                            <p className="todo-item__status">Статус задачи: {this.props.todo.status}</p>
                        </div>
                        <div className="col-sm-3">
                            <p className="todo-item__date-performance">Дата выполнения: {format(this.props.todo.datePerformance)}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8">
                            <p className="todo-item__description">{this.props.todo.description}</p>
                        </div>
                        <div className="col-sm-4">
                            <p className="todo-item__importance">Важность: {this.props.todo.importance}</p>
                            <p className="todo-item__date-deadline">Выполнить до: {format(this.props.todo.dateDeadline)}</p>
                        </div>
                    </div>
                    <button className="todo-item__remove" onClick={this.handlerRemove}>Удалить</button>
                    <button className="todo-item__edit" onClick={this.handlerSelect}>Редактировать</button>
                    <button className="todo-item__performance" onClick={this.handlerPerformance}>Отметить</button>
                </div>
            </div>
        )
    }
}
