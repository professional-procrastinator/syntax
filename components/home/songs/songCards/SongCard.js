import styles from './SongCard.module.css'
export default function SongCard({song,index,playSong}){
    return(
        <div className={styles.songCard} key={index} onClick={()=>{playSong(song)}}>
            <div className={styles.songCardImage}>
                <img src={song.image}/>
            </div>
            <div className={styles.songCardInfo}>
                <div className={styles.songCardInfoText}>
                    <h3>{song.name}</h3>
                    {song.album?<p className={styles.albumName}>{song.album}</p>:null}
                    <div className={styles.songCardArtistInfo}>
                        {
                            song.artists.map((artist,index)=>{
                                return(
                                    <div key={index} className={styles.songCardArtist}>            
                                        <img className={styles.songCardArtistImage} src={artist.image}/>
                                        <p>{artist.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className={styles.playButton} />
        </div>
    )
}