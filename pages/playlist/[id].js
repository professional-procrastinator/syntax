import {useRouter} from 'next/router';

import Header from '../../components/header/Header';
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
                <div className="playlistContainer">
                    <h2>{playlist.name}</h2>
                </div>
            )}
        </div>
    )
}