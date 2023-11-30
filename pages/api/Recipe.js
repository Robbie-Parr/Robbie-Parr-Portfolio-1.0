import {db,request} from "./firebase"

const getData = async (req, res) => {
    const data = await request("baking","Bakes",req.body.series,req.body.id);
    res.status(200).json({data});
}


const handler = (req, res) => {
    switch(req.method){
        case "POST":
            getData(req,res);
            break;
    }
  }
  

export default handler;