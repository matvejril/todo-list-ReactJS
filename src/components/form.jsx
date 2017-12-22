import React, { Component } from 'react';

import addTodo from '../actions/addTodo';
import updateTodo from '../actions/updateTodo';

export default class Form extends Component {
    defaultState = {
        name: '',
        description: '',
        importance: 'Обычная',
        dateDeadline: '',
        datePerformance: '',
        status: "В процессе",
    };

    constructor(props) {
        super(props);
        this.state = {
            todo: props.selectedTodo ? props.selectedTodo : { ...this.defaultState }
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.todo !== nextProps.selectedTodo) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    todo: nextProps.selectedTodo ? nextProps.selectedTodo : this.defaultState
                };
            })
        }
    };

    handlerAddTodo = () => {
        let todoName = this.state.todo.name;
        if (todoName) {
            const todo = {
                id: Date.now(),
                name: todoName,
                description: this.state.todo.description,
                importance: this.state.todo.importance,
                dateDeadline: Date.parse(this.state.todo.dateDeadline) || '-',
                datePerformance: this.state.todo.datePerformance,
                status: this.state.todo.status
            };
            this.props.dispatch(addTodo(todo));
            this.resetForm();
        }
    };

    handlerUpdateTodo = () => {
        let todoName = this.state.todo.name;
        if (todoName) {
            let todo = {
                id: this.state.todo.id,
                name: todoName,
                description: this.state.todo.description,
                importance: this.state.todo.importance,
                dateDeadline: Date.parse(this.state.todo.dateDeadline) || '-',
                datePerformance: '',
                status: "В процессе"
            };
            this.props.dispatch(updateTodo(todo));
            this.resetForm();
        }
    };

    handleChange = (event) => {
        const todo = { ...this.state.todo };
        const { name, value } = event.target;
        todo[name] = value;
        this.setState({ todo: todo });
    };

    resetForm() {
        this.setState({
            todo: { ...this.defaultState },
        });
    }

    renderBtn = () => {
        const addBtn = <button type="button" className="creator__add" onClick={this.handlerAddTodo}>Добавить</button>;
        const saveBtn = <button type="button" className="creator__save" onClick={this.handlerUpdateTodo}>Сохранить</button>;
        if (this.state.todo.id) {
            return saveBtn
        } else {
            return addBtn
        }
    };

    render () {
        return (
            <div className="creator">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <input className="creator__name"
                                   placeholder="Имя задачи"
                                   name='name'
                                   value={this.state.todo.name}
                                   onChange={this.handleChange}
                            />
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <label>Важность задачи:
                                <select className="creator__importance"
                                        name='importance'
                                        value={this.state.todo.importance}
                                        onChange={this.handleChange}
                                >
                                    <option value="Обычная">Обычная</option>
                                    <option value="Высокая">Высокая</option>
                                    <option value="Наивысшая">Наивысшая</option>
                                </select>
                            </label>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <label>Выполнить до:
                                <input type="date"
                                       className="creator__date-deadline"
                                       name='dateDeadline'
                                       value={this.state.todo.dateDeadline}
                                       onChange={this.handleChange}

                                />
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <textarea className="creator__description"
                                      placeholder="Описание задачи"
                                      name="description"
                                      value={this.state.todo.description}
                                      onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 creator__action">
                            {this.renderBtn()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
