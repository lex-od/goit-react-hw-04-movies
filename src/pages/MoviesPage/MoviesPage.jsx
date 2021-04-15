import React, { Component } from 'react';
import queryString from 'query-string';
// import css from './MoviesPage.module.scss';

import MovieList from '../../components/MovieList';
import SearchForm from '../../components/SearchForm';
import tmdbApi from '../../services/tmdbApi';

export default class MoviesPage extends Component {
    state = {
        movies: [],
    };

    componentDidUpdate(prevProps, prevState) {
        const prevQuery = this.getQueryFromProps(prevProps);
        const currQuery = this.getQueryFromProps(this.props);

        if (currQuery && prevQuery !== currQuery) {
            this.searchMovies();
        }
    }

    handleChangeQuery = query => {
        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `query=${query}`,
        });
    };

    searchMovies = async () => {
        try {
            const { results } = await tmdbApi.searchMovies({
                query: this.getQueryFromProps(this.props),
            });

            this.setState({ movies: results });
        } catch (err) {
            console.log(`${err.name}: ${err.message}`);
        }
    };

    getQueryFromProps(props) {
        return queryString.parse(props.location.search).query;
    }

    render() {
        const { movies } = this.state;

        return (
            <>
                <SearchForm onSubmit={this.handleChangeQuery} />

                <MovieList movies={movies} />
            </>
        );
    }
}
