// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDB from "../../../global/connect.js" //connect to the mongodb database

connectToDB();
//import models
import Playlist from "../../../models/PlayList"

export default async function handler(req, res) {
    const {id} = req.query;
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
}
  