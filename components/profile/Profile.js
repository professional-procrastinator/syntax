
import styles from "./Profile.module.css"

export default function ProfileUI({profile}){
    return(
        <>
            <div className={styles.profileContainer}>
                <div className={styles.profileBanner} style={{'backgroundColor':profile.banner}} />

                <div className={styles.profileInfoContainer}>
                    <div className={styles.profileInfo}>
                        <img src={profile.image} className={styles.profileImage}/>
                        
                        <div className={styles.profileInfoText}>
                            <h2 className={styles.profileName}>{profile.name}</h2>
                            <h3 className={styles.profileUsername}>{profile.username}</h3>
                        </div>
                    </div>

                    <div className={styles.profileBio}>{profile.bio}</div>
                </div>

            </div>
        </>
    )
}