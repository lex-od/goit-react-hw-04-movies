import PropTypes from 'prop-types';
import css from './MovieList.module.scss';

const MovieList = ({ movies }) => (
    <ul>
        {movies.map(({ id, title }) => (
            <li className={css.movieListItem} key={id}>
                {title}
            </li>
        ))}
    </ul>
);

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default MovieList;
