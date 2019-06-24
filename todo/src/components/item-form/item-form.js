import React, { Component } from 'react';
import './item-form.css';

export default class ItemForm extends Component {
    state = {
        label: ''
    }
    onValueChange = (e) => {
        this.setState({ label: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.label.length) {
            this.props.onCreated(this.state.label);
            //контроллируемый элемент с двусторонней связью - значение устанавливается из состояния компонента
            this.setState({
                label: ''
            });
        }
    }
    render() {
        return (
            <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
                <input className="input" type="text" id="itemFormInput" onChange={this.onValueChange} placeholder="What needs to be done?" value={this.state.label}></input>
                <button className="btn btn-outline-secondary" onSubmit={this.onSubmit}>Add item</button>
            </form>
        )
    }
}