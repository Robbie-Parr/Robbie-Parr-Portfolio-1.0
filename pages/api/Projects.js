import {db,request} from "./firebase"

const getData = async (req, res) => {
    const data = await request("projects");
    res.status(200).json({data});
}

const getProjectDoc = async (req, res) => {
    const data = await request("projects",req.body.doc);
    res.status(200).json({data});
}


const handler = (req, res) => {
    switch(req.method){
        case "GET":
            getData(req,res);
            break;
        case "POST":
            getProjectDoc(req,res);
            break;
    }
  }
  

export default handler;