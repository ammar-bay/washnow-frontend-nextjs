import React from 'react'
import styles from "./styles.module.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Section7: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <img className={styles.logo} alt="Logo" src="/img/logo-2.svg" />
                <div className={styles.options}>
                    <div className={styles.text}>Home</div>
                    <div className={styles.text}>Booking</div>
                    <div className={styles.text}>Cars</div>
                    <div className={styles.text}>Alerts</div>
                </div>
            </div>
            <hr className={styles.line} />
            <div className={styles.bottom}>
                <div className={styles.left}>
                    <div className={styles.text}>Washnow</div>
                    <div className={styles.text}>©</div>
                    <div className={styles.text}>2023</div>
                    <div className={styles.text}>|</div>
                    <div className={styles.text}>All rights reserved</div>
                </div>
                <div className={styles.mid}>
                    <div className={styles.text}>Terms and condition</div>
                    <div className={styles.text}>Privacy policy</div>
                </div>
                <div className={styles.right}>
                    <FacebookIcon className={styles.icon} />
                    <InstagramIcon className={styles.icon} />
                </div>
            </div>
        </div>
    )
}

export default Section7