import songs from "../../../global/songs";

export default async function handler(req, res) {
    
        if(req.method==='GET'){       
            songs.filter(song=>{
                if(song.id===req.query.id){
                    return song;
                }
            }) 
            res.status(200).json({
                status: "success",
                data: songs
            });
        }else{
            res.status(401).json({
                "status":"error",
                "details":"Invalid request - Method not allowed"
            })
        }
}
