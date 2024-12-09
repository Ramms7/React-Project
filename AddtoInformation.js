import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
  

function AddInformation(){

    const[AddInformation,setAddInformation]=useState([])
 useEffect(()=>{
    
        fetch("http://localhost:3006/AddInformation",{
            method:"GET"
        }).then((res)=>{
            return res.json()
        }).then((resp)=>{
              setAddInformation(resp)
              alert("INFORMATION ADDED SUCCESFULLY")
        }).catch(()=>{
            alert("INFORMATION NOT ADDED ")
        })
 },[])
   return(
    <div>
        <div className="container">
            <div className="card text-center" >
                <h1 style={{color:"darkblue"}}><i class="fa-solid fa-school"></i>  STUDENT INFORMATION  <i class="fa-solid fa-graduation-cap"></i></h1>
                <div style={{paddingRight:"900px"}}>
                <Link to={"/StudentTable"} className="btn btn-danger"><i class="fa-solid fa-backward"></i>  BACK TO DATABASE  <i class="fa-solid fa-delete-left"></i></Link>
                </div>
                <div className="card-body" style={{display:"flex"}} >
                    {AddInformation.map((item)=>(
                        <div style={{border:"3px grey solid"}}>
                            <h4>{item.id}</h4>
                            <h4>{item.name}</h4>
                            <h4>{item.email}</h4>
                            <h4>{item.mobile}</h4>
                            <h4>{item.percentage}</h4>
                            <h4>{item.city}</h4>
                            <h4>{item.state}</h4>
                        </div>
                    ))}

                </div>

            </div>

        </div>

    </div>
   )
}
export default AddInformation;