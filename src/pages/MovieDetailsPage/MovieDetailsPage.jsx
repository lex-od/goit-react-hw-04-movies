import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import css from './MovieDetailsPage.module.scss';
import routes from '../../routes';
import tmdbApi from '../../services/tmdbApi';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';

export default class MovieDetailsPage extends Component {
    state = {
        movie: null,
        cast: [],
        reviews: [],
    };

    componentDidMount() {
        this.getMovieDetails();
        this.getMovieCredits();
        this.getMovieReviews();
    }

    getMovieDetails = async () => {
        try {
            const movie = await tmdbApi.getMovieDetails({
                movieId: this.getMovieIdFromPath(),
            });

            this.setState({ movie });
        } catch (err) {
            console.log(`${err.name}: ${err.message}`);
        }
    };

    getMovieCredits = async () => {
        try {
            const { cast } = await tmdbApi.getMovieCredits({
                movieId: this.getMovieIdFromPath(),
            });

            this.setState({ cast });
        } catch (err) {
            console.log(`${err.name}: ${err.message}`);
        }
    };

    getMovieReviews = async () => {
        try {
            const { results } = await tmdbApi.getMovieReviews({
                movieId: this.getMovieIdFromPath(),
            });

            this.setState({ reviews: results });
        } catch (err) {
            console.log(`${err.name}: ${err.message}`);
        }
    };

    handleGoBack = () => {
        const { location, history } = this.props;

        history.push(location.state?.from || routes.movies);
    };

    getMovieIdFromPath() {
        return Number(this.props.match.params.movieId);
    }

    render() {
        const { movie, cast, reviews } = this.state;
        const { match, location } = this.props;

        return (
            movie && (
                <>
                    <button
                        type="button"
                        onClick={this.handleGoBack}
                        className={css.goBackBtn}
                    >
                        Назад
                    </button>
                    <div className={css.movieWrapper}>
                        {movie.poster_path && (
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className={css.moviePoster}
                            />
                        )}
                        <div className={css.movieDescrWrapper}>
                            <h1 className={css.movieTitle}>{movie.title}</h1>
                            {!!movie.vote_average && (
                                <p className={css.movieDescrData}>
                                    Рейтинг:{' '}
                                    {Math.round(movie.vote_average * 10)}%
                                </p>
                            )}
                            <h2 className={css.movieDescrTitle}>Описание</h2>
                            <p className={css.movieDescrData}>
                                {movie.overview}
                            </p>
                            {!!movie.genres?.length && (
                                <>
                                    <h2 className={css.movieDescrTitle}>
                                        Жанры
                                    </h2>
                                    <p>
                                        {movie.genres
                                            .map(({ name }) => name)
                                            .join(', ')}
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                    <div className={css.additionalWrapper}>
                        <h2 className={css.movieDescrTitle}>
                            Дополнительная информация
                        </h2>
                        <ul>
                            <li className={css.additionalListItem}>
                                <Link
                                    to={{
                                        pathname: `${match.url}/cast`,
                                        state: { from: location.state?.from },
                                    }}
                                >
                                    Актеры
                                </Link>
                            </li>
                            <li className={css.additionalListItem}>
                                <Link
                                    to={{
                                        pathname: `${match.url}/reviews`,
                                        state: { from: location.state?.from },
                                    }}
                                >
                                    Обзоры
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <Switch>
                        <Route
                            path={`${match.path}/cast`}
                            render={props => <Cast {...props} cast={cast} />}
                        />
                        <Route
                            path={`${match.path}/reviews`}
                            render={props =>
                                reviews?.length ? (
                                    <Reviews {...props} reviews={reviews} />
                                ) : (
                                    <p>Нет обзоров для этого фильма</p>
                                )
                            }
                        />
                    </Switch>
                </>
            )
        );
    }
}
