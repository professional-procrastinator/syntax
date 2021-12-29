import styles from './newPlaylist.module.css'
import {useRef,useEffect,useState} from 'react'; 
export default function NewPlaylistPopup({setOpen,newPlaylist}){
    const [playlistName,setPlaylistName] = useState("");
    const [playlistDescription,setPlaylistDescription] = useState("");
    const [playListSrc,setPlayListSrc] = useState("");

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

    const handleUpload = async (file)=>{


        var reader = new FileReader();
        reader.readAsDataURL(file)
        

        reader.onload = () => {
            setPlayListSrc(reader.result)
        }
        
    }

    return(
        <div className={styles.newPlaylistPopupBackground}>
            <div className={styles.newPlaylistPopup} ref={ref}>
                <div className={styles.newPlaylistPopupHeader}>
                    <h2 className={styles.newPlaylistPopupHeading}>New Playlist</h2>
                    <div className={styles.popupCloseIcon} onClick={()=>{setOpen(false)}} />
                </div>

                <div className={styles.newPlaylistPopupBody}>
                    <p className={styles.newPlaylistPopupDesc}>Create a new playlist. Fill it with music later.</p>
                    <div className={styles.newPlaylistPopupBodyInputContainer}>

                        <div className={styles.mainInfoContainer}>
                        <input className={styles.newPlaylistPopupBodyInput} value={playlistName} onChange={(evt)=>{setPlaylistName(evt.target.value)}} placeholder="Playlist Name" />
                            
                            
                                {
                                playListSrc==""?(
                                <div className={styles.newPlaylistImageChooser}>
                                    <input type="file" placeholder="Image" id="imageInput" style={{display:'none'}} onChange={(evt)=>{handleUpload(evt.target.files[0])}} />
                                    <label htmlFor="imageInput" className={styles.chooseImageIcon}/>
                                </div>):(<img src={playListSrc} className={styles.newPlaylistImage}/>)
                                }
                                
                        </div>
                        <textarea className={styles.newPlaylistPopupBodyTextarea} placeholder="Description" value={playlistDescription} onChange={(evt)=>{setPlaylistDescription(evt.target.value)}} />
                        <button className={styles.newPlaylistPopupCreateButton} onClick={()=>{
                            newPlaylist({name:playlistName,description:playlistDescription,image:playListSrc});
                            setOpen(false);
                        }}>Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}