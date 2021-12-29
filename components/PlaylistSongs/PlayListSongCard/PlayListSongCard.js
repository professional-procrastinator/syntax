import {useEffect,useState} from 'react';
import styles from './PlayListSongCard.module.css'
export default function PlaylistSongCard({song,playlist,index}){
   
    return(
        <div className={styles.PlaylistSongCard} key={index}>
            <img className={styles.PlaylistSongCardImage} src={song.image} />
            <div className={styles.PlaylistSongCardInfo}>
                <h3>{song.name}</h3>
                <p>{song.album}</p>
            </div>
        </div>
    )
}