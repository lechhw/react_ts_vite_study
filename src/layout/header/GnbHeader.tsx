import { Link, useNavigate } from 'react-router-dom';
import styles from './GnbHeader.module.scss';
import { useUserState } from '../../context/UserContext';

const GnbHeader = () => {
    const navigate = useNavigate();
    const { userData, handleLogout } = useUserState();

    return (
        <nav className={styles.wrap}>
            <div className={styles.linkWrap}>
                <Link to={'/page/menu1'}>Menu1</Link>
                <Link to={'/page/menu2'}>Menu2</Link>
                <Link to={'/page/menu3'}>Menu3</Link>
            </div>
            <div className={styles.btnWrap}>
                {Number(userData?.access) === 0 && <button>시스템관리</button>}
                <button onClick={() => navigate('/login')}>LogIn</button>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
};

export default GnbHeader;
