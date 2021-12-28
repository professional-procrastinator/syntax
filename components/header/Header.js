
import {useState,useEffect} from 'react';
import {useSession} from 'next-auth/client';

//import components
import Logo from './logo/Logo';
import Links from './links/Links';
import UserPopup from './UserPopup/UserPopup';

import header from './Header.module.css' //import header styles

export default function Header() {
    const [session,loading] = useSession();
    const [profileData,setProfileData] = useState(null);
    const [userPopupOpen,setUserPopupOpen] = useState(null)
    
    useEffect(async ()=>{

        if(loading){
            return false;
        }
        if(session){
            const response = await fetch('/api/me',{
                method:'GET'
            });

            const profileData = await response.json();
            setProfileData(profileData.user);
        }
        
    },[session,loading])


    return(
        <div className={header.container}>
            <Logo />
            <Links userPopupOpen={userPopupOpen} setUserPopupOpen={setUserPopupOpen}/>
            {userPopupOpen?<UserPopup user={profileData} setUserPopupOpen={setUserPopupOpen}/>:null}
        </div>
    )
}