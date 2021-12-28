import {useState,useEffect} from 'react';
import styles from './AudioPlayer.module.css'
export default function AudioPlayer({song}){
    const [loading,setLoading] = useState(true);
    const [songInfo,setSong] = useState(song);
    const [audioObj,setAudioObj] = useState(null);
    const [volume,setVolume] = useState(0.7);
    const [playing,setPlaying] = useState(true);
    const [currentTime,setCurrentTime] = useState(0);
    const [duration,setDuration] = useState(0);

    useEffect(()=>{
        setAudioObj(new Audio(songInfo.url));
    },[])

    useEffect(()=>{
        if(audioObj){
            setLoading(false)
            audioObj.play();
        }
    },[audioObj])

    if(songInfo){
        return(
            <div className={styles.audioPlayer}>
                <div className={styles.audioPlayerControls}>
                    <div className={styles.audioPlayerLeft}>
                        <div className={styles.audioPlayerInfo}>
                            <img src={song.image} className={styles.audioPlayerInfoImage}/>
                            
                            <div className={styles.audioPlayerInfoText}>
                                <h3>{song.name}</h3>
                                <p>{song.album?`${song.album}`:null}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }else{
        return(
            <div className="audioPlayer">
                <div className={styles.audioPlayerMiddle}>
                    <h3>Choose a song to play.</h3>
                </div>
            </div>
        )
    }
}