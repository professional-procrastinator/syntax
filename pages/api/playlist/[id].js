// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDB from "../../../global/connect.js" //connect to the mongodb database

connectToDB();
//import models
import Playlist from "../../../models/Playlist"

export default async function handler(req, res) {
    const {id} = req.query;
    if(req.method==='GET'){
        
        const playlist = await Playlist.findOne({"_id": id});
        if(!playlist) {
            res.status(404).json({
                status: "error",
                details: "Playlist not found"
            })
        }else{
            res.status(200).json({
                error: "None",
                details: playlist,
            });
        }
    }else if(req.method==='PUT'){
        const playlist = await Playlist.findOne({"_id": id});
        const updatedPlaylist = await Playlist.findOneAndUpdate({"_id": req.query.id}, {songs:[req.body,...playlist.songs]}).lean();
        if(!updatedPlaylist) {
            res.status(404).json({
                status: "error",
                details: "Playlist not found"
            })
        }else{
            res.status(200).json({
                error: "None",
                details: updatedPlaylist,
            });
        }
    }
}
  