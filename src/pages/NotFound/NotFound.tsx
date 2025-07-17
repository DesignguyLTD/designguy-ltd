import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';
import ButtonI from '../../components/Buttons/ButtonI';

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className={styles.notFoundContainer} data-aos="fade-up">
            <br/>
            <br/>
            <div className={styles.contentWrapper}>
                <h1 className={styles.errorCode}>404</h1>
                <h2 className={styles.title}>Page Not Found</h2>
                <p className={styles.message}>
                    The page you are looking for might have been removed,
                    had its name changed, or is temporarily unavailable.
                </p>
                <div className={styles.buttonWrapper}>
                    <ButtonI text="Back to Home" onClick={handleGoHome} />
                </div>
            </div>
            <div className={styles.illustration}>
                <div className={styles.circle}></div>
                <div className={styles.crossedLines}>
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
