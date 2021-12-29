import Header from '../header/Header' //import header
import Image from 'next/image';
import landingImg from "../../public/undraw_happy_music_g6wc.svg";
import styles from './Landing.module.css';
import {signIn} from 'next-auth/client'
export default function Landing(){
    return(
        <>
            <Header />
            <div className={styles.mainContainer}>
                <Image src={landingImg} width={400} height={400} />

                <div className={styles.textContainer}>
                    <h2>Tunes.</h2>
                    <p>The only music app you'll ever need.</p>
                </div>

                <div className={styles.buttonContainer}>
                    <button className={styles.signupButton} onClick={()=>{signIn()}}>Sign up</button>
                    
                    <div className={styles.githubIcon} onClick={()=>{window.location.href="https://github.com/professional-procrastinator/syntax"}} />
                </div>
            </div>

        </>
    )
}