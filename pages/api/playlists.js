import connectToDB from "../../global/connect"
import User from "../../models/user"
import Playlist from "../../models/playlist"
import mongodb from 'mongodb';
import {getSession} from 'next-auth/client';

export default async function handler(req, res) {

    if(req.method==='GET'){
            
        const session = await getSession({req});
        if(!session){
            return res.status(401).json({error: "Auth_Invalid",details:"Looks like you're not logged in. Try again?"});
        }
        const email = session.user.email;

        const user = await User.findOne({ email:email });
        if(!user){
            return res.status(402).json({error: "User_Not_Found",details:"An unknown error occured. Try again?"});
        }

        const playlists = await Playlist.find({owner:user._id});
        return res.status(200).json({playlists:playlists,error:'None'});
    }
    else if(req.method==="POST"){
        
        const session = await getSession({req});

        if(!session){
            return res.status(401).json({error: "Auth_Invalid",details:"Looks like you're not logged in. Try again?"});
        }
        const email = session.user.email;
        const user = await User.findOne({ email:email });
        if(!user){
            return res.status(402).json({error: "User_Not_Found",details:"An unknown error occured. Try again?"});
        }

        
        const playlist = req.body;
        const newPlaylist = await new Playlist({
            name: playlist.name,
            description: playlist.description,
            image:playlist.image,
            songs:[],
            owner: user._id,
        }).save();

        await User.findOneAndUpdate({email:email},{playlists:[newPlaylist._id,...user.playlists]}).lean();

        res.status(200).json({error:"None",playlist:newPlaylist});

    }
}