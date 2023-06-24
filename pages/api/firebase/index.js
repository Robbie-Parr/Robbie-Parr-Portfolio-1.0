import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { doc, getDoc } from "firebase/firestore";

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


const request = async (...args) => {
  //todo: modify this function
  //
  //collection,document,collection2,document2
    if(args.length==1){//!document){
      logReq(args[0])
      return getAllCollectionDocs(getCollection(db,args[0]))
        //return (await db.collection(collection).get()).docs.map(doc => {let id=doc.id; let data = doc.data();return({id:id,data:data})})
    }else {
      return getDocument(db,...args)
    }/* if(!collection2 && !document2){
      logReq(collection,document)
      return getDoc
        //return (await getDoc(doc(db,collection,document))).data()
    }else{
      logReq(collection,document,collection2,document2)
        //return (await getDoc(doc(db,collection,document,collection2,document2))).data()
    }*/
}

const getCollection = async (db,collectionName) => {
  return(await (db.collection(collectionName).get()))
}

const getAllCollectionDocs = async (collection) => {
  return collection.docs.map(doc => {let id=doc.id; let data = doc.data();return({id:id,data:data})})
}

const getDocument = async (db,...args) => {
  return (await getDoc(doc(db,...args))).data()
}


const logReq = (...args) => {
  console.log(args.length)
  console.log(args)
  
}

export {db,request};