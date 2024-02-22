import { useLocation } from 'react-router-dom';
import styles from './App.module.scss';
import Router from './router/Router';
import GnbHeader from './layout/GnbHeader';

function App() {
    const { pathname } = useLocation();

    return (
        <div className={styles.app}>
            {pathname.indexOf(`${'login' || 'error'}`) < 0 && <GnbHeader />}
            <div className={styles.contents}>
                <Router />
            </div>
        </div>
    );
}

export default App;
