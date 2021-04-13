import { Switch, Route, Redirect } from 'react-router-dom';
// import './styles/App.module.scss';

import AppBar from './components/AppBar';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';

const App = () => (
    <AppBar>
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/movies" exact component={MoviesPage} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Redirect to="/" />
        </Switch>
    </AppBar>
);

export default App;
