import css from './AppBar.module.scss';

import Navigation from '../Navigation';

const AppBar = ({ children }) => {
    return (
        <>
            <header className={css.header}>
                <div className={css.container}>
                    <Navigation />
                </div>
            </header>
            <main className={css.main}>
                <div className={css.container}>{children}</div>
            </main>
        </>
    );
};

export default AppBar;
