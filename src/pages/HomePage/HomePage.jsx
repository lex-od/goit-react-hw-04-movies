import React, { Component } from 'react';
import css from './HomePage.module.scss';

import tmdbApi from '../../services/tmdbApi';
import MovieList from '../../components/MovieList';

export default class HomePage extends Component {
    state = {
        trendMovies: [],
    };

    async componentDidMount() {
        this.getTrendMovies();
    }

    getTrendMovies = async () => {
        try {
            const { results } = await tmdbApi.getTrending();

            this.setState({ trendMovies: results });
        } catch (err) {
            console.log(`${err.name}: ${err.message}`);
        }
    };

    render() {
        const { trendMovies } = this.state;

        return (
            <>
                <h1 className={css.pageTitle}>Популярные сегодня</h1>

                <MovieList movies={trendMovies} />
            </>
        );
    }
}
