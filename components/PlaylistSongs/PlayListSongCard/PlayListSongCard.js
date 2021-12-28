import {useEffect,useState} from 'react';
export default function PlaylistSongCard({song,playlist,index}){
    return(
        <div className={styles.PlaylistSongCard} key={index}>
            <img className={styles.PlaylistSongCardImage} src={song.image}>
        </div>
    )
}