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


const request = async (collection,document,collection2,document2) => {
    if(document==undefined){
        return((await db.collection(collection).get()).docs.map(doc => {let id=doc.id; let data = doc.data();return({id:id,data:data})}))
    }else if(collection2==undefined && document2==undefined){
        return(await (await getDoc(doc(db,collection,document))).data())
    }else{
        return(await (await getDoc(doc(db,collection,document,collection2,document2))).data())
    }
}

export {db, request};