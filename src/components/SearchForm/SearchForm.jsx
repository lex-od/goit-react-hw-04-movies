import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './SearchForm.module.scss';

export default class SearchForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    state = {
        query: '',
    };

    handleChange = e => {
        this.setState({ query: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.query);

        this.setState({ query: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={css.searchForm}>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.query}
                />
                <button type="submit">Искать</button>
            </form>
        );
    }
}
