import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchBar from '../search-bar';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemForm from '../item-form';

import './app.css';

export default class App extends Component {
    state = {
        todoData: this.prepareTodoItems(['Learn JS', 'Build React App', 'Drink Coffee']),
        term: '',
        filterMode: 'all'
    }
    //functions
    prepareTodoItems(labels) {
        return labels.map((label, index) => {
            return this.composeTodoItem(label, index);
        });
    }
    composeTodoItem(label, index) {
        return {
            id: index !== undefined && !this.state ? index : this.state.todoData.length + 1,
            done: false,
            label: label,
            important: false
        };
    }
    //state properties toggler
    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };
        return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    }
    search(items, term) {
        if (term.length <= 2) {
            return items;
        }
        return items.filter((item) => { return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1; });
    }
    filter(items, filter) {
        switch (filter) {
            case 'all': return items;
            case 'active': return items.filter((item) => !item.done);
            case 'done': return items.filter((item) => item.done);
            default: return items;
        }
    }
    //state setters
    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            //нельзя изменять существующий state, поэтому нужно создать shallow-копию массива и передать ее в setState
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
            return {
                todoData: newArray
            };
        });
    }
    createItem = (label) => {
        const newItem = this.composeTodoItem(label);
        this.setState(({ todoData }) => {
            const newArray = [...todoData, newItem];
            return {
                todoData: newArray
            }
        });
    }
    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return { todoData: this.toggleProperty(todoData, id, 'important') };
        });
    }
    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return { todoData: this.toggleProperty(todoData, id, 'done') };
        });
    }
    onSearchChange = (term) => {
        this.setState({ term });
    }
    onFilterChange = (filterMode) => {
        this.setState({ filterMode });
    }
    //render the component
    render() {
        const { todoData, term, filterMode } = this.state;
        const visibleItems = this.filter(this.search(todoData, term), filterMode);
        const doneCount = todoData.filter((item) => { return item.done }).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div>
                <AppHeader doneCount={doneCount} todoCount={todoCount} />
                <div className="d-flex">
                    <SearchBar onSearchChange={this.onSearchChange} />
                    <ItemStatusFilter filterMode={filterMode} onFilterChange={this.onFilterChange} />
                </div>
                <ItemForm onCreated={this.createItem} />
                <TodoList todos={visibleItems} onToggleImportant={this.onToggleImportant} onToggleDone={this.onToggleDone} onDeleted={this.deleteItem} />
            </div>
        );
    }
}