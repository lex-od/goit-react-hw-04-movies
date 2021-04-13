// import './styles/App.module.scss';

import AppBar from './components/AppBar';
// import tmdbApi from './services/tmdbApi';

const App = () => {
    // tmdbApi.getMovieReviews({ movieId: 603, page: 2 }).then(console.log);

    return (
        <AppBar>
            <h1>Welcome</h1>
        </AppBar>
    );
};

// const App = () => (
//     <AppBar>
//         <h1>Welcome</h1>
//     </AppBar>
// );

export default App;
