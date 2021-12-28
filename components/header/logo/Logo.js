//logo to be used in the header

import LogoStyles from './Logo.module.css';
export default function Logo(){
    return(
        <div className={LogoStyles.logoContainer}>
            
            <p className={LogoStyles.logoText}>Tunes</p>
        </div>
    )
}