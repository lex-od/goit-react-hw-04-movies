import css from './AppBar.module.scss';

const AppBar = ({ children }) => {
    return (
        <>
            <header className={css.header}>
                <div className={css.container}></div>
            </header>
            <main className={css.main}>
                <div className={css.container}>{children}</div>
            </main>
        </>
    );
};

export default AppBar;
