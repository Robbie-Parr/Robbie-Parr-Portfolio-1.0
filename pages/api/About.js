import {db,request} from "./firebase"

const getData = async (req, res) => {
    const data = await request("about_me","details");


    res.status(200).json({data});
}


const handler = (req, res) => {
    switch(req.method){
        case "GET":
            getData(req,res);
            break;
    }
  }
  

export default handler;