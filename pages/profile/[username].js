
import {useState,useEffect} from 'react'
import {useRouter} from 'next/router';
import Header from '../../components/header/Header';
import ProfileUI from '../../components/profile/Profile';
import {useSession} from 'next-auth/client';
const Profile = () => {
    const [loading,setLoading] = useState(true);
    const [resultProfile,setProfile] = useState(null);
    const [error,setError] = useState(null);
    const router = useRouter();
    const {username} = router.query;

    
    const FetchProfile = async () => { 
        
        const response = await fetch(`/api/profile/${router.query.username}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const profile = await response.json();
        if(profile.status!=="success"){
            setLoading(false);
            return setError(profile.details);
        }
        setLoading(false);
        setProfile(profile.details) 
    }

    useEffect(async ()=>{
        if(!username){
            return;
        }else{
            FetchProfile();
            
        }
       
    },[username])

    


    return(
        <>
        <Header />
        <div>
            {resultProfile==null||loading?<div className="loader" />:<ProfileUI profile={resultProfile}/>}
        </div>
        </>
    )
}
export default Profile;