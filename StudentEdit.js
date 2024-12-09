import {useEffect,useState } from "react";
import {  Link, useNavigate, useParams } from "react-router-dom";



function StudentEdit() {

   
    const[id,setID]=useState()
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[mobile,setMobile]=useState()
    const[percentage,setPercentage]=useState()
    const[city,setCity]=useState()
    const[state,setState]=useState()

    const navigate=useNavigate()
    const {Studentid}=useParams()
    
    const changeId=(h)=>{
        setID(h.target.value)
    }
    const changeName=(q)=>{
        setName(q.target.value)
    }
    const changeEmail=(w)=>{
        setEmail(w.target.value)
    }
    const changeMobile=(n)=>{
        setMobile(n.target.value)
    }
    const changePercentage=(b)=>{
        setPercentage(b.target.value)
    }
    const changeCity=(v)=>{
        setCity(v.target.value)
    }
    const changeState=(c)=>{
        setState(c.target.value)
    }
    const SubmitData=(s)=>{
        s.preventDefault()
        const obj={name,email,mobile,percentage,city,state}
        fetch("http://localhost:3006/StudentManagementData",{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(obj) 

        }).then(()=>{
            alert("SUBMITED SUCESSFULY")
            navigate("/StudentTable")

        }).catch(()=>{
            alert("Error")
        })
        
    }
    useEffect(()=>{
        fetch("http://localhost:3006/StudentManagementData/"+Studentid, {
            method: "GET"
        }).then((res) => {
    
            return res.json()
    
        })
            .then((resp) => {
    
                alert("EDITING PAGE LOGIN SUCCESFULLY")
                console.log(resp)
                setID(resp.id)
                setName(resp.name)
                setEmail(resp.email)
                setMobile(resp.mobile)
                setPercentage(resp.percentage)
                setCity(resp.city)
                setState(resp.state)
                
    
            })
            .catch(() => {
                alert("Erorr 404")
            })
      },[])

    
    
    return (
        <div style={{padding:"80px"}}>
            <div style={{width:"500px"}} className="container">
                <div className="card" style={{backgroundColor:"lightblue"}}>
                    <div className="card-title text-center">
                        <h1><i class="fa-solid fa-address-card"></i> STUDENT EDIT FORM</h1>

                    </div>
                    <div className="card-body">
                        <form onSubmit={SubmitData}>
                        <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label"><i class="fa-solid fa-id-card"></i> ID</label>
                                <input type="number" value={id} onChange={changeId} disabled="disabled" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
                            </div>
                        <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label"><i class="fa-solid fa-person"></i> Name</label>
                                <input type="name" value={name} onChange={changeName} required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label"><i class="fa-solid fa-envelope"></i>  Email </label>
                                <input type="email" value={email} onChange={changeEmail} required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label"><i class="fa-solid fa-phone"></i> Mobile</label>
                                <input type="number" value={mobile} onChange={changeMobile}  required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label"><i class="fa-solid fa-percent"></i> Percentage</label>
                                <input type="number" value={percentage} onChange={changePercentage} required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label"><i class="fa-solid fa-city"></i> City</label>
                                <input type="text" value={city} onChange={changeCity} required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label"><i class="fa-solid fa-flag-usa"></i> State</label>
                                <input type="text" value={state} onChange={changeState}  required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
                            </div>
                            <div style={{textAlign:"center"}}>
                            <button type="submit" class="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i>  EDIT</button>
                            <Link to={"/StudentTable"} className="btn btn-danger" style={{margin:"30px"}}> <i class="fa-solid fa-backward"></i>  BACK</Link>
                           
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </div>
    )
}
export default StudentEdit;