import styles from './Playlists.module.css';
import {weekday,month} from '../../global/dates'
import PlayListCard from './playlistCard/PlayListCard';
export default function PlayLists({list,setNewPlayListPopupOpen}){
    return(
        <div className={styles.PlayListsContainer}>
            <div className={styles.PlayListsHeader}>
                <h1 className={styles.mainHeading}>Your Playlists</h1>
                <button className={styles.newPlayListButton} onClick={()=>{setNewPlayListPopupOpen(true)}}>New Playlist</button>
            </div>

            <div className={styles.PlayListsBody}>
                {
                    list.map((playlist,index)=>{
                        return(
                            <PlayListCard playlist={playlist} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )

}