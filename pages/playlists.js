import {useSession} from 'next-auth/client';
import {useState,useEffect} from 'react';
import Header from '../components/header/Header';
import NewPlaylistPopup, {newPlaylistPopup} from '../components/playlists/newPlaylist/newPlaylist';
import PlayLists from '../components/playlists/Playlists';

import {toast} from 'react-toastify';

export default function Playlists(){
    const [playlists,setPlaylists] = useState([]);
    const [session,loadingSession] = useSession();
    const [loadingPlaylists,setLoadingPlaylists] = useState(true);
    const [newPlayListPopupOpen,setNewPlayListPopupOpen] = useState(false);

    useEffect(async ()=>{
        const response = await fetch('/api/playlists',{
            'method':'GET'
        });
        const data = await response.json();

        if(data.error==="None"){

            setPlaylists(data.playlists);
            setLoadingPlaylists(false);
        }
        else{
            toast(data.details, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    },[])

    const newPlaylist = async (playlist) => {
        const response = await fetch('/api/playlists',{
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(playlist)
        })

        const data = await response.json();

        
        if(data.error==="None"){

            setPlaylists([...playlists,data.playlist]);
            setLoadingPlaylists(false);
        }
        else{
            toast(data.details, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return(
        <>
            <Header />
            {newPlayListPopupOpen?<NewPlaylistPopup setOpen={setNewPlayListPopupOpen} newPlaylist={newPlaylist}/>:null}
            {loadingPlaylists?(<div className="loaderContainer"><div className="loader" /></div>):<PlayLists list={playlists} setNewPlayListPopupOpen={setNewPlayListPopupOpen} />}
        </>
    )
    
}