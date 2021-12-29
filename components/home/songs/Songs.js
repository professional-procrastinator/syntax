import SongCard from "./songCards/SongCard"
import {useState,useEffect} from 'react';
import AddToPlaylist from './songCards/addToPlaylist'
import styles from './Songs.module.css'
export default function Songs({playSong}){
    
    const [isAddtoPlaylistOpen,setAddtoPlaylistOpen] = useState(false);
    
    const [addToPlaylistSong,setAddtoPlaylistSong] = useState(null);
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
            
            {isAddtoPlaylistOpen?(<AddToPlaylist setOpen={setAddtoPlaylistOpen} addToPlaylistSong={addToPlaylistSong}/>):null}
            <div className={styles.songsCategory}>
                <h2 className={styles.categoryHeading}>Trending</h2>

                <div className={styles.songsContainer}>
                    {songs.length===0?(<div className="loader" />):
                        songs.map((song,index)=>{
                            if(song.category==="Trending"){   
                                return(
                                    <SongCard playSong={playSong} song={song} index={index} setAddtoPlaylistOpen={setAddtoPlaylistOpen} setAddtoPlaylistSong={setAddtoPlaylistSong}/>
                                )
                            }
                        })
                    }
                </div>

            </div>
        </div>
    )
}