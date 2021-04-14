import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.scss';
import routes from '../../routes';

const Navigation = () => (
    <nav>
        <ul className={css.navList}>
            <li className={css.navListItem}>
                <NavLink
                    to={routes.home}
                    exact
                    className={css.navListLink}
                    activeClassName={css.activeLink}
                >
                    Главная
                </NavLink>
            </li>
            <li className={css.navListItem}>
                <NavLink
                    to={routes.movies}
                    className={css.navListLink}
                    activeClassName={css.activeLink}
                >
                    Фильмы
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Navigation;
