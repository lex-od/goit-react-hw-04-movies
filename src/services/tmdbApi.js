import axios from 'axios';

const _getDiffData = async ({ path, query = '' }) => {
    const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;

    const { data } = await axios.get(
        `${REACT_APP_BASE_URL}${path}?api_key=${REACT_APP_API_KEY}${query}`,
    );

    return data;
};

const getTrending = ({
    mediaType = 'movie',
    timeWindow = 'day',
    page = 1,
} = {}) =>
    _getDiffData({
        path: `/trending/${mediaType}/${timeWindow}`,
        query: `&page=${page}`,
    });

const searchMovies = ({ query, page = 1 }) =>
    _getDiffData({
        path: '/search/movie',
        query: `&query=${query}&page=${page}`,
    });

const getMovieDetails = ({ movieId }) =>
    _getDiffData({ path: `/movie/${movieId}` });

const getMovieCredits = ({ movieId }) =>
    _getDiffData({ path: `/movie/${movieId}/credits` });

const getMovieReviews = ({ movieId, page = 1 }) =>
    _getDiffData({ path: `/movie/${movieId}/reviews`, query: `&page=${page}` });

const tmdbApi = {
    getTrending,
    searchMovies,
    getMovieDetails,
    getMovieCredits,
    getMovieReviews,
};
export default tmdbApi;
