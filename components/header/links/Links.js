//links that will be used in the header

import {useState,useEffect} from 'react';
import {signIn,useSession} from 'next-auth/client';

//stylesheets
import LinkStyles from './Links.module.css';
import HomeStyles from '../../../styles/Home.module.css';

export default function Links({setUserPopupOpen,userPopupOpen}){
    const [session, loading] = useSession();
    const [profile,setProfile] = useState(null);

    if(session){
        return(
            <div>
                <img src={session.user.image} onClick={()=>{setUserPopupOpen(!userPopupOpen)}} className={LinkStyles.userImage}/>
            </div>
        )
    }
    else{
        return(
            <div className={LinkStyles.linksContainer}>
                <a href="/features" className={LinkStyles.link}>Features</a>
                <a href="/pricing" className={LinkStyles.link}>Pricing</a>
                <button onClick={(e)=>{signIn()}} className={LinkStyles.signupButton}>Sign up</button>
            </div>
        )
    }
}