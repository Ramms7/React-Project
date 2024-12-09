 import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";



const firebaseConfig = {
    apiKey: "AIzaSyB6KQngQqUcotaIV5CE9sIC2ATz3TdoqFU",
    authDomain: "react-form-6b032.firebaseapp.com",
    projectId: "react-form-6b032",
    storageBucket: "react-form-6b032.appspot.com",
    messagingSenderId: "606238070413",
    appId: "1:606238070413:web:1c412566340c799119f4c4",
    measurementId: "G-14805PEZQ3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth=getAuth()
  function UserName(){
    const[usename,setUsername]=useState()

    useEffect(()=>{

       let x=onAuthStateChanged(auth,u=>setUsername(u))
       return x
    })
    return usename;

  }

  export default UserName;