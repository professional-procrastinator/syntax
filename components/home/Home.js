import Header from '../header/Header' //import header
import Songs from './songs/Songs' //import songs
import AudioPlayer from '../audioPlayer/AudioPlayer'; 
import {useState} from 'react';
export default function Home(){
    const [chosenSong,setChosenSong] = useState(null);
    const playSong = (song) => {
        console.log(song)
        setChosenSong(song)
    }

    if(!chosenSong){
        return(
            <div>
                <Header/>
                <h1>Home</h1>
                <Songs playSong={playSong}/>
            </div>
        )
    }else{
        return(
            <>
                <Header/>
                <h1>Home</h1>
                <Songs playSong={playSong}/>
                <AudioPlayer song={chosenSong}/>
            </>
        )
    }
}