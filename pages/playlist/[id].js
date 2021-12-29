import {useRouter} from 'next/router';

import AudioPlayer from '../../components/audioPlayer/AudioPlayer'; 
import Header from '../../components/header/Header';
import PlaylistSongs from '../../components/PlaylistSongs/PlaylistSongs';
import {useState,useEffect} from 'react';
export default function PlayList() {
    const [playlist, setPlaylist] = useState(null);
    const [songs, setSongs] = useState([]);
    const [chosenSong, setChosenSong] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const router = useRouter();
    const {id} = router.query;

    const FetchPlaylist = async () => { 
            
        const response = await fetch(`/api/playlist/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        if(data.error!=="None"){
            return console.error(data.details);
        }
        
        setChosenSong(data.details.songs[0])
        setPlaylist(data.details) 
        setLoading(false);

        
    }
    useEffect(async ()=>{
        if(!id){
            return;
        }else{
            FetchPlaylist();
            
        }
       
    },[id])

    return(
        <div>
            <Header />
            {isLoading?<div className="loaderContainer"><div className="loader"/></div>:(
                <>
                <div className="playlistContainer">
                    <PlaylistSongs list={playlist.songs} chosenSong={chosenSong} setChosenSong={setChosenSong} playlist={playlist}/>
                </div>
                <AudioPlayer song={chosenSong}/>
                </>
            )}
        </div>
    )
}