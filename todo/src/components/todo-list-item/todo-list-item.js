import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
    /*
    //Объявление стейтов и методов класса - по старинке, через конструктор
    constructor() {
        super();
        this.state = {
            done: false
        }
        this.onLabelClick = () => {
            console.warn(`clicked on ${this.props.label}`);
        }
    }*/
    state = {
        done: false,
        important: false
    }
    //Proposal, пока не вошедший в стандарт - использование контекста родителя посредством arrow function
    /*onDoneClick = () => {
        //Состояние изменилось - по алгоритму reconciliation перерендерим DOM node
        //Получаем наш текущий state
        //Если новое состояние не зависит от предыдущего состояния, то setState может принять объект, а не функцию
        this.setState((state) => {
            return { done: state.done ? false : true }
        });
    }
    onImportantButtonClick = () => {
        //state можно деструктурировать
        this.setState(({ important }) => {
            return { important: !important }
        });
    }*/
    render() {
        const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;
        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }
        return (
            <span className={classNames}>
                <span className="todo-list-item-label" onClick={onToggleDone}>
                    {label}
                </span>
                <button type="button" className="btn btn-outline-success btn-sm" onClick={onToggleImportant}><i className="fa fa-exclamation"></i></button>
                <button type="button" className="btn btn-outline-danger btn-sm" onClick={onDeleted}><i className="fa fa-trash"></i></button>
            </span>
        );
    }
}

//Деструктуризация пропсов функции-компонента
/*const TodoListItemFunc = ({ label, important = false }) => {
    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    }
    return (
        <span className="todo-list-item">
            <span className="todo-list-item-label" style={style}>
                {label}
            </span>
            <button type="button" className="btn btn-outline-success btn-sm"><i className="fa fa-exclamation"></i></button>
            <button type="button" className="btn btn-outline-danger btn-sm"><i className="fa fa-trash"></i></button>
        </span>
    );
};*/

//export default TodoListItem;