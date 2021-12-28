import SongCard from "./songCards/SongCard"
import {useState,useEffect} from 'react';

import styles from './Songs.module.css'
export default function Songs({playSong}){
    const [songs,setSongs] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(async ()=>{
        setLoading(true);

        const response = await fetch('/api/songs',{
            method:'GET'
        })
        const data = await response.json();

        if(data.status!=="success"){
            console.error('An error occured.',data.details);
            return setLoading(false);
        }
        else{
            setLoading(false);
            setSongs(data.data)
        }
    },[])

    return(
        <div>
            <div className={styles.songsCategory}>
                <h2 className={styles.categoryHeading}>Trending</h2>

                <div className={styles.songsContainer}>
                    {songs.length===0?(<div className="loader" />):
                        songs.map((song,index)=>{
                            if(song.category==="Trending"){   
                                return(
                                    <SongCard playSong={playSong} song={song} index={index}/>
                                )
                            }
                        })
                    }
                </div>

            </div>
        </div>
    )
}