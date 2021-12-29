import PlayListCard from "../../../playlists/playlistCard/PlayListCard";
import playlistCardStyles from "../../../playlists/playlistCard/PlayListCard.module.css"; 
import styles from './addToPlaylist.module.css';
import {useState,useEffect,useRef} from "react";
export default function addToPlaylist({setOpen,addToPlaylistSong}){
    const [chosenPlaylist,setChosenPlaylist] = useState(null);
    const [playlists,setPlaylists] = useState([]);
    const [loading,setLoading] = useState(true);
    let ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
    });
    
    useEffect(async () => {
        const response = await fetch('/api/playlists',{
            'method':'GET'
        });
        const data = await response.json();

        if(data.error==="None"){

            setPlaylists(data.playlists);
            setLoading(false);
        }
    },[]);

    const addToPlaylist = () => {
        if(chosenPlaylist){
            const response = fetch(`/api/playlist/${chosenPlaylist}`,{
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(
                    addToPlaylistSong
                )
            });
            setOpen(false);
        }
    }
    if(loading){
        return(
            <div className="loaderContainer">
                <div className="loader"></div>
            </div>
        )
    }
    return(
        <div className={styles.AddToPlaylistBackground}>
            <div className={styles.AddToPlaylistContainer} ref={ref}>
                <div className={styles.AddToPlaylistHeader}>
                    <h1 className={styles.AddToPlaylistHeaderHeading}>Add to playlist</h1>
                    <p className={styles.AddToPlaylistHeaderDescription}>Add songs to your playlist. You can add songs to your playlist by clicking on the songs you want to add and then choosing a playlist.</p>
                </div>
                
                <div className={styles.AddToPlaylistBody}>
                   
                    
                    <div className={styles.AddToPlaylistBodyList}>
                        {
                            playlists.map((playlist,index)=>{
                                return(
                                    <div className={playlistCardStyles.PlayListCard} style={{"background":chosenPlaylist==playlist._id?"var(--dark-info-container-hover)":"var(--dark-info-container)"}}onClick={()=>{setChosenPlaylist(playlist._id)}}>
                                        <div className={playlistCardStyles.PlayListCardImage}>
                                            
                                            {playlist.image?(<img className={playlistCardStyles.PlayListCardImage} src={playlist.image} />):null}
                                        </div>

                                        <div className={playlistCardStyles.PlayListCardHeader}>
                                            <h3 className={playlistCardStyles.PlayListName}>{playlist.name}</h3>
                                            <p className={playlistCardStyles.PlayListSongsText}>{playlist.songs.length} songs</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className={styles.AddToPlaylistButton} onClick={()=>{addToPlaylist()}}>Add to playlist</button>
                </div>
            </div>
        </div>
    )
}