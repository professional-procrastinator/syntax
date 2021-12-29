import styles from './SongCard.module.css';
import {useState,useEffect} from 'react';
import Overlay from './overlay';
export default function SongCard({song,index,playSong,setAddtoPlaylistOpen,setAddtoPlaylistSong}){
    const [isDetailsPopupOpen,setDetailsPopupOpen] = useState(false);
    return(
        <div className={styles.songCard} key={index} onClick={()=>{playSong(song)}}>
            {isDetailsPopupOpen?(<Overlay playSong={playSong} song={song} setOpen={setDetailsPopupOpen} setAddtoPlaylistSong={setAddtoPlaylistSong} setAddtoPlaylistOpen={setAddtoPlaylistOpen}/>):null}
            <div className={styles.songCardImage}>
                <img src={song.image}/>
            </div>
            <div className={styles.songCardInfo}>
                <div className={styles.songCardInfoText}>
                    <div className={styles.songCardInfoTextHeader}>
                        <h3>{song.name}</h3>
                        <div className={styles.detailsIcon} onClick={()=>{setDetailsPopupOpen(true)}}/>
                    </div>
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