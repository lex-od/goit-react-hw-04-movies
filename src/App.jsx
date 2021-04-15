import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import './styles/App.module.scss';

import routes from './routes';
import AppBar from './components/AppBar';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));

const App = () => (
    <AppBar>
        <Suspense fallback={<div>Загрузка...</div>}>
            <Switch>
                <Route path={routes.home} exact component={HomePage} />
                <Route
                    path={routes.movieDetails}
                    component={MovieDetailsPage}
                />
                <Route path={routes.movies} component={MoviesPage} />
                <Redirect to="/" />
            </Switch>
        </Suspense>
    </AppBar>
);

export default App;
