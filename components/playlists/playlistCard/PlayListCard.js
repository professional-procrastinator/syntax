import styles from './PlayListCard.module.css'
export default function PlayListCard({playlist,index}){
    return(
        <div className={styles.PlayListCard} onClick={()=>{window.location.href=`/playlist/${playlist._id}`}}>
            <div className={styles.PlayListCardImage}>
                <img className={styles.PlayListCardImage} src={playlist.image} />
            </div>

            <div className={styles.PlayListCardHeader}>
                <h3 className={styles.PlayListName}>{playlist.name}</h3>
                <p className={styles.PlayListSongsText}>{playlist.songs.length} songs</p>
            </div>
        </div>
    )
}