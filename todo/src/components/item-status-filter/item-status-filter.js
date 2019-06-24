import React, { Component } from 'react';
import './item-status-filter.css';

//Если компоненту нужно работать с внутренним состоянием, то вместо компонента-функции следует юзать компонент-класс
export default class ItemStatusFilter extends Component {
    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' },
    ]
    render() {
        const { filterMode, onFilterChange } = this.props;
        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = filterMode === name;
            const buttonClass = isActive ? 'btn btn-info' : 'btn btn-outline-secondary';
            return (
                <button type="button" className={buttonClass} key={name} onClick={() => onFilterChange(name)}>{label}</button>
            )
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}