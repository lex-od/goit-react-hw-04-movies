import React, { Component } from 'react';
// import css from './MovieDetailsPage.module.scss';

export default class MovieDetailsPage extends Component {
    handleGoBack = () => {
        const { location, history } = this.props;

        history.push(location.state?.from || '/');
    };

    render() {
        return (
            <>
                <button type="button" onClick={this.handleGoBack}>
                    Назад
                </button>
                <div>
                    <h1>Batman begins</h1>
                    <p>User score 76%</p>
                    <h2>Описание</h2>
                    <p>BlaBlaBla</p>
                    <h2>Жанры</h2>
                    <p>BlaBlaBla</p>
                </div>
                <div>
                    <h2>Дополнительная информация</h2>
                    <ul>
                        <li>Актеры</li>
                        <li>Обзоры</li>
                    </ul>
                </div>
            </>
        );
    }
}
