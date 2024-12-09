import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";




function RegistrationForm() {
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[cpswd,setCpswd]=useState()
    const changeName=(q)=>{
        setName(q.target.value)
    }
    const changeEmail=(w)=>{
        setEmail(w.target.value)
    }
    const changePassword=(e)=>{
        setPassword(e.target.value)
    }
    const changeCpswd=(r)=>{
        setCpswd(r.target.value)
    }

  
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
 const navigate=useNavigate()
const auth=getAuth()
 const RegisterData=(x)=>{
    x.preventDefault()
    let obj={
        Email:email,
        Password:password
    }
    createUserWithEmailAndPassword(auth,obj.Email,obj.Password)
    .then(()=>{
        alert("REGISTRATION DONE SUCESSFULLY")
        navigate("/Login")
    }).catch(()=>{
        alert("ERROR")
    })
    

 }



 
    return (
        <div style={{padding:"20px"}}> 
            <div style={{width:"500px"}} className="container" >
                <div className="card" style={{backgroundColor:"lightslategray"}}>
                    <div className="card-title text-center">
                        <h1><i class="fa-solid fa-address-card"></i>  REGISTRATION FORM</h1>

                    </div>
                    <div className="card-body">
                        <form onSubmit={RegisterData} >
                        <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label"><i class="fa-solid fa-person"></i>  Name</label>
                                <input type="name" value={name} onChange={changeName} required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                   
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label"><i class="fa-solid fa-envelope"></i>  Email </label>
                                <input type="email" value={email} onChange={changeEmail} required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                   
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label"><i class="fa-solid fa-key"></i> Password</label>
                                <input type="password" value={password} onChange={changePassword} required class="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label"><i class="fa-solid fa-lock"></i>  Coifrm Password</label>
                                <input type="password" value={cpswd} onChange={changeCpswd} required class="form-control" id="exampleInputPassword1"/>
                            </div >
                            <div style={{textAlign:"center"}}>
                                
                            <button type="submit" class="btn btn-primary">REGISTER</button>
                            <h4>If You Already Have An Account?Login Below <i class="fa-solid fa-down-long"></i></h4>
                            <Link to={"/Login"} className="btn btn-danger" style={{margin:"30px"}}><i class="fa-solid fa-right-to-bracket"></i>  LOGIN HERE</Link>

                            </div>
                           

                        </form>

                    </div>

                </div>

            </div>

        </div>

    )
}
export default RegistrationForm;
