import {useEffect,useRef} from 'react';
import {signOut} from 'next-auth/client';
import styles from './UserPopup.module.css'
export default function UserPopup({user,setUserPopupOpen}){

    let ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setUserPopupOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return(
        <div className={styles.popupParent}>
            <div ref={ref} className={styles.popupDiv}>
                <div className={styles.userProfileDiv}>
                    <img src={user.image} />
                    
                    <div className={styles.userProfileText}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                    </div>
                </div>

                <div>
                    <div className={`${styles.popupLinkDiv} ${styles.homePopupLinkDiv}`} onClick={()=>{window.location.href=`/`}}>
                    <div className={styles.homeIcon}></div>
                    <p className={styles.linkText}>Home</p>
                    <div className={styles.homeDivArrow}></div>
                </div>

                <div className={`${styles.popupLinkDiv} ${styles.profilePopupLinkDiv}`} onClick={()=>{window.location.href=`/profile/${profileUsername}`}}>
                    <div className={styles.profileIcon}></div>
                    <p className={styles.linkText}>Profile</p>
                    <div className={styles.profileDivArrow}></div>
                </div>

                <div className={`${styles.popupLinkDiv} ${styles.settingsPopupLinkDiv}`} onClick={()=>{window.location.href = "/playlists"}}>
                    <div className={styles.playlistsIcon}></div>
                    <p className={styles.linkText}>Playlists</p>
                    <div className={styles.settingsDivArrow}></div>
                </div>
                
                <div className={`${styles.popupLinkDiv} ${styles.settingsPopupLinkDiv}`}>
                    <div className={styles.settingsIcon}></div>
                    <p className={styles.linkText}>Settings</p>
                    <div className={styles.settingsDivArrow}></div>
                </div>

                <div className={styles.logoutSeparator}></div>

                <div onClick={()=>{signOut()}} className={styles.logoutDivMain}>
                    <div className={styles.logoutIcon}></div>
                        
                    <p className={styles.dangerText}>Logout</p>
                </div>

                </div>
            </div>
        </div>
    )
}