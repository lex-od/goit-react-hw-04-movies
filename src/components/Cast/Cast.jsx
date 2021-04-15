import PropTypes from 'prop-types';
import css from './Cast.module.scss';

const Cast = ({ cast }) => (
    <ul>
        {cast.map(({ profile_path, name, character, id }) => (
            <li key={id} className={css.castListItem}>
                {profile_path && (
                    <img
                        src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                        alt={name}
                        className={css.castListImg}
                    />
                )}
                <p className={css.castListName}>{name}</p>
                <p>Персонаж: {character}</p>
            </li>
        ))}
    </ul>
);

Cast.propTypes = {
    cast: PropTypes.arrayOf(
        PropTypes.shape({
            profile_path: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.oneOf([null]),
            ]),
            name: PropTypes.string.isRequired,
            character: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

export default Cast;
