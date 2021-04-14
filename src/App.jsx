import { Switch, Route, Redirect } from 'react-router-dom';
// import './styles/App.module.scss';

import routes from './routes';
import AppBar from './components/AppBar';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';

const App = () => (
    <AppBar>
        <Switch>
            <Route path={routes.home} exact component={HomePage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route path={routes.movies} component={MoviesPage} />
            <Redirect to="/" />
        </Switch>
    </AppBar>
);

export default App;
