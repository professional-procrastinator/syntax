const songs = [
        {
            "id": "ebeufry73yegd",
            "name": "Shape of You",
            "artists":[
                {
                    "name":"Ed Sheeran",
                    "image":"https://s.abcnews.com/images/GMA/ed-sheeran-01-gty-iwb-210702_1625238828935_hpMain_4x3t_992.jpg"
                }
            ],
            "album": "Shape of You",
            "image": "https://s3.amazonaws.com/secretsaucefiles/photos/images/000/120/955/large/Screen_Shot_2017-01-30_at_7.36.54_PM.png?1485823203",
            "category": "Hot",
            "url":"https://docs.google.com/uc?export=download&id=1Me1BwwMIHmh03C0pfVB_y4Ci5gUr_-Jl"
        },
        {
            "id": "riouttbgt8g74",
            "name": "Despacito",
            "artists": [
                {
                    "name":"Luis Fonsi",
                    "image":"https://www.hola.com/us/imagenes/celebrities/2019020517201/luis-fonsi-new-music-daughter/0-123-599/luis-fonsi-m.jpg"
                },
                {
                    "name":"Daddy Yankee",
                    "image":"https://upload.wikimedia.org/wikipedia/commons/b/b7/Daddy_Yankee_-_The_Kingdom_%28Official_Q_%26_A%29.png"
                }
            ],
            "image": "https://upload.wikimedia.org/wikipedia/en/c/c8/Luis_Fonsi_Feat._Daddy_Yankee_-_Despacito_%28Official_Single_Cover%29.png",
            "category": "Hot"
        }
]
export default async function handler(req, res) {

    if(req.method==='GET'){        
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