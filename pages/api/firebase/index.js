import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { doc, getDoc } from "firebase/firestore";
import { getStorage,ref, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "robbie-s-portfolio.firebaseapp.com",
    projectId: "robbie-s-portfolio",
    storageBucket: "robbie-s-portfolio.appspot.com",
    messagingSenderId: "69184993727",
    appId: "1:69184993727:web:eb86bb2255b295519e090a"
  };

let app;
if(firebase.apps.length===0){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app();
}

const db = app.firestore();

const storage = getStorage(app);


const request = async (...args) => {
  if(args.length==1){
    return getAllCollectionDocs(getCollection(db,args[0]))
  }else {
    return getDocument(db,...args)
    }
}

const getCollection = async (db,collectionName) => {
  return await (db.collection(collectionName).get())
}

const getAllCollectionDocs = async (collection) => {
  return (await collection).docs.map(doc => {let id=doc.id; let data = doc.data();return({id:id,data:data})})
}

const getDocument = async (db,...args) => {
  return (await getDoc(doc(db,...args))).data()
}


const logReq = (...args) => {
  console.log(args.length)
  console.log(args)
}

const imageRequest = async (...args) => {
  let root = args.join("/");
  if(root==""){
    return "";
  }
  const url = await getDownloadURL(ref(storage,root));
  return url
}

export {db,request,imageRequest};