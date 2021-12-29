import {useRef,useState,useEffect} from 'react';
import styles from './overlay.module.css';
export default function Overlay({song,playSong,setOpen,setAddtoPlaylistOpen,setAddtoPlaylistSong}){
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
    
    return(
        <>
        <div className={styles.popupOverlayDiv} ref={ref}>
            <div className={styles.overlayOption} id={styles.overlayPlay} onClick={()=>{playSong(song)}}>
                <p className={styles.overlayOptionText}>Play</p>
                <div className={styles.overlayOptionIcon} id={styles.overlayPlayIcon}></div>
            </div>
            
            <div className={styles.overlayOption} id={styles.overlayShare} onClick={()=>{
                setAddtoPlaylistSong(song);
                setAddtoPlaylistOpen(true)
                }}>
                <p className={styles.overlayOptionText}>Add to playlist</p>
                <div className={styles.overlayOptionIcon} id={styles.addtoplaylistIcon}></div>
            </div>
            
            <div className={styles.overlayOption} id={styles.overlayReport}>
                <p className={styles.overlayOptionText}>Report</p>
                <div className={styles.overlayOptionIcon} id={styles.overlayReportIcon}></div>
            </div>
        </div>
        </>
    )

}