import React, { Component } from 'react';
import { connect } from "react-redux";

import addToLocal from '../actions/addToLocal';

import Creator from '../components/form';
import Filter from "../components/filter";
import TodoList from '../components/todoList';

import { readFromLocalStorage, writeToLocalStorage } from '../helpers/localStorage'

class App extends Component {
    constructor(props) {
        super(props);
        const todoList = readFromLocalStorage();
        this.props.dispatch(addToLocal(todoList));
    }

    componentDidUpdate() {
        writeToLocalStorage(this.props.todoList);
    }

    render() {
        return (
            <div className="app">
                <Creator dispatch={this.props.dispatch} selectedTodo={this.props.selectedTodo} />
                <Filter dispatch={this.props.dispatch} />
                <TodoList dispatch={this.props.dispatch} list={this.props.list} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { todoList } = state;
    return {
        todoList: todoList,
        list: todoList.list.filter(todo => todo.importance.includes(todoList.filterValue)),
        selectedTodo: todoList.selected,
    };
}

function mapDispatchToProps(dispatch) {
    return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
