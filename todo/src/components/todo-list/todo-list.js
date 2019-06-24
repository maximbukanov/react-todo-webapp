import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

//React-компоненты
const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
    const elements = todos.map((item) => {
        const { id, ...params } = item;
        return (
            //spread-оператор
            <li key={id} className="list-group-item"><TodoListItem {...params} onDeleted={() => onDeleted(id)} onToggleImportant={() => onToggleImportant(id)} onToggleDone={() => onToggleDone(id)} /></li>
        );
    });
    //Корнем JSX-элемента должен быть div или любой другой тег, но он должен быть один
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
}

export default TodoList;