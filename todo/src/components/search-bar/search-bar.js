import React, { Component } from 'react';
import './search-bar.css';

export default class SearchBar extends Component {
    state = {
        term: ''
    }
    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({
            term: term
        });
        this.props.onSearchChange(term);
    }
    render() {
        const searchText = 'Type here to search...';
        const searchStyle = {
            fontSize: '15px'
        }
        return (
            //Значением атрибута может быть все, что угодно
            <input placeholder={searchText} style={searchStyle} className="input" value={this.state.term} onChange={this.onSearchChange}></input>
        );
    }
}