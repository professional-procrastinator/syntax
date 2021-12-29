import styles from './PlaylistSongs.module.css';
import PlaylistSongCard from './PlaylistSongCard/PlayListSongCard';
export default function PlaylistSongs({playlist,list}){
    return(
        <div className={styles.PlaylistSongsContainer}>
            <div className={styles.PlaylistSongsHeader}>
                <img className={styles.PlaylistSongsImage} src={playlist.image} />

                <div className={styles.PlaylistSongsHeaderInfo}>
                    <h1 className={styles.mainHeading}>{playlist.name}</h1>
                    <p className={styles.description}>{playlist.description}</p>
                    <p className={styles.description}>{playlist.songs.length} songs</p>
                </div>
            </div>

            <div className={styles.PlaylistSongsBody}>
                {
                    list.map((song,index)=>{
                        return(
                            <PlaylistSongCard key={index} song={song} playlist={playlist} index={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}