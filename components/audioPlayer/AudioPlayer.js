import {useState,useEffect} from 'react';
import styles from './AudioPlayer.module.css'
import durationToTime from '../../global/duration-to-time';
export default function AudioPlayer({song}){
    const [loading,setLoading] = useState(true);
    const [songInfo,setSong] = useState(song);
    const [audioObj,setAudioObj] = useState(null);
    const [volume,setVolume] = useState(0.7);
    const [playing,setPlaying] = useState(true);
    const [currentTime,setCurrentTime] = useState(0);
    const [duration,setDuration] = useState(0);
    const [muted,setMuted] = useState(false);
    const [loop,setLoop] = useState(false);

    useEffect(()=>{
        setAudioObj(new Audio(songInfo.url));

        return(()=>{
            setAudioObj(null);
            setDuration(0);
            setCurrentTime(0);
            setSongInfo(null);
        })
    },[])

    useEffect(()=>{
        if(audioObj){
            audioObj.preload="metadata";
            audioObj.play();
            setLoading(false)
            setPlaying(true);

            audioObj.onloadedmetadata = () => {

                setDuration(durationToTime(audioObj.duration));
            }
        }
        return
    },[audioObj])
    
    const pause = () => {
        audioObj.pause();
        setPlaying(false);
    }

    const play = () => {
        
        audioObj.play();
        setPlaying(true)
    }

    const toggleMute = () => {
        audioObj.muted = !muted;
        setMuted(!muted);
    }

    const toggleLoop = () => {
        audioObj.loop = !loop;
        setLoop(!loop)
    }

    if(songInfo){
        return(
            <div className={styles.audioPlayer}>
                <div className={styles.audioPlayerControls}>
                    <div className={styles.audioPlayerLeft}>
                        <div className={styles.audioPlayerInfo}>
                            <img src={song.image} className={styles.audioPlayerInfoImage}/>
                            
                            <div className={styles.audioPlayerInfoText}>
                                <h3>{song.name}</h3>
                                {song.album?<p>{song.album}</p>:null}
                            </div>
                        </div>
                    </div>

                    <div className={styles.audioPlayerCenter}>
                        <div className={styles.audioPlayerControlsMain}>
                            <div className={styles.audioPlayerControlsTop}>
                                {!loop?(<div className={styles.loopButtonOff} onClick={toggleLoop} />):(<div className={styles.loopButtonOn} onClick={toggleLoop} />)}
                                {playing?<div className={styles.pauseButton} onClick={()=>(pause())}/>:<div className={styles.playButton} onClick={()=>(play())}/>}
                                {muted?(<div className={styles.mutedButton} onClick={()=>(toggleMute())} />):(<div className={styles.volumeButton} onClick={()=>(toggleMute())}/>)}
                            </div>

                            <div className={styles.audioPlayerControlsBottom}>
                                {currentTime}
                                {duration}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}