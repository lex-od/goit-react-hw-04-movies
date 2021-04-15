import PropTypes from 'prop-types';
import css from './Reviews.module.scss';

const Reviews = ({ reviews }) => (
    <ul>
        {reviews.map(({ author, content, id }) => (
            <li key={id} className={css.reviewsListItem}>
                <p className={css.reviewsListAuthor}>Автор: {author}</p>
                <p>{content}</p>
            </li>
        ))}
    </ul>
);

Reviews.propTypes = {
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default Reviews;
