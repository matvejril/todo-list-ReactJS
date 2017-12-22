import React, { Component } from 'react';

import filterTodo from '../actions/filterTodo';

export default class Filter extends Component {
    handleChange = (event) => {
        let filterValue = event.target.value;
        this.props.dispatch(filterTodo(filterValue))
    };

    render () {
        return (
            <div className="filter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <label>Выбрать задачи:
                                <select className="filter__select-importance" onChange={this.handleChange}>
                                    <option value="">Все</option>
                                    <option value="Обычная">Обычная</option>
                                    <option value="Высокая">Высокая</option>
                                    <option value="Наивысшая">Наивысшая</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
