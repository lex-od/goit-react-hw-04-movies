import React, { Component } from 'react';
// import css from './MoviesPage.module.scss';

import MovieList from '../../components/MovieList';

export default class MoviesPage extends Component {
    render() {
        return (
            <>
                <form>
                    <input type="text" />
                    <button type="submit">Искать</button>
                </form>

                <MovieList movies={[]} />
            </>
        );
    }
}
