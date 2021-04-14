import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.scss';

const Navigation = () => (
    <nav>
        <ul className={css.navList}>
            <li className={css.navListItem}>
                <NavLink
                    to="/"
                    exact
                    className={css.navListLink}
                    activeClassName={css.activeLink}
                >
                    Главная
                </NavLink>
            </li>
            <li className={css.navListItem}>
                <NavLink
                    to="/movies"
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
