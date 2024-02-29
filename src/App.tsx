import { Outlet, useLocation } from 'react-router-dom';
import styles from './App.module.scss';
import GnbHeader from './layout/header/GnbHeader';
import { UserProvider } from './context/UserContext';
import GlobalStyles from './GlobalStyles';

function App() {
    const { pathname } = useLocation();

    return (
        <UserProvider>
            <GlobalStyles />
            <div className={styles.app}>
                {pathname.indexOf(`${'login' || 'error'}`) < 0 && <GnbHeader />}
                <div className={styles.contents}>
                    <Outlet />
                </div>
            </div>
        </UserProvider>
    );
}

export default App;
