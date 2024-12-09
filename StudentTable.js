import { useEffect, useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import UserName from "./UserName"




function StudentTable() {

      const[data,setData]=useState([])

      const currentusename=UserName()

      




     

      useEffect(()=>{
        fetch("http://localhost:3006/StudentManagementData", {
            method: "GET"
        }).then((res) => {
    
            return res.json()
    
        })
            .then((resp) => {
    
                alert ("LOGINED SUCCESFULLY")
                console.log(resp)
                setData(resp)
    
            })
            .catch(() => {
                alert("Erorr 404")
            })
      },[])

      const navigate=useNavigate()
      const EditData=(id)=>{
        navigate("/StudentEdit/"+id)
  
      }
      const DeleteData=(id)=>{
        fetch("http://localhost:3006/StudentManagementData"+id,{
            method:"DELETE"
        })
        .then(()=>{
            alert("DELETED SUCESSFULLY")
            
        })
        .catch(()=>{
            alert("ERROR")
        })
      }
      const AddInformation=(id)=>{
             fetch("http://localhost:3006/StudentManagementData/"+id,{
                method:"GET"
             }).then((res)=>{
                return res.json()
             }).then((resp)=>{

                fetch("http://localhost:3006/AddInformation",{
                    method:"POST",
                    headers:{"content-type":"application/json"},
                    body:JSON.stringify(resp)
                }).then(()=>{
                    alert("SUCCESSFULY ADDED TO THE INFORMATION")
                }).catch(()=>{
                    alert("ERROR")
                })

             })
      }


    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="card-title text-center">
                        <h1><i class="fa-solid fa-school"></i>  STUDENETS DATA  <i class="fa-solid fa-graduation-cap"></i></h1>
                       
                    </div>
                    <div  className="card-body">
                        <Link to={"/StudentForm"} className="btn btn-primary"><i class="fa-solid fa-user-plus"></i> ADD NEW</Link>
                        <div style={{paddingTop:"30px"}}>
                        <Link to={"/ADDInformation"}><i class="fa-solid fa-circle-info"></i>  <i class="fa-solid fa-arrow-right"></i>  MAIN INFO  <i class="fa-solid fa-arrow-left"></i> <i class="fa-solid fa-bell"></i></Link>
                        </div>
                        <div style={{marginLeft:"600px",paddingBottom:"30px"}}>                        
                        <h5><i class="fa-solid fa-id-card-clip"></i>  CURRENT USER ID<i class="fa-solid fa-id-badge"></i> <i class="fa-solid fa-arrow-right-to-bracket"></i>  <i class="fa-solid fa-user-graduate"></i>{currentusename?.email}</h5> 
                        <div style={{paddingLeft:"250px"}}> 
                        <Link  to={"/Login"} className="btn btn-danger" ><i class="fa-solid fa-right-to-bracket"></i>  LOG OUT</Link>
                        </div>
                        </div>
                        
                        <table class="table table-bordered">
                            
                            <thead>
                                <tr>
                                    <th scope="col"><i class="fa-solid fa-id-card"></i>  id</th>
                                    <th scope="col"><i class="fa-solid fa-person"></i>  Name</th>
                                    <th scope="col"><i class="fa-solid fa-envelope"></i>  Email</th>
                                    <th scope="col"><i class="fa-solid fa-phone"></i>  Mobile</th>
                                    <th scope="col"><i class="fa-solid fa-percent"></i>   Percentage</th>
                                    <th scope="col"><i class="fa-solid fa-city"></i>   City</th>
                                    <th scope="col"><i class="fa-solid fa-flag-usa"></i>  State</th>
                                    <th scope="col"><i class="fa-solid fa-key"></i>  Action Key</th>
                                </tr>
            
                            </thead>
                
                            <tbody>
                            {data.map((item)=>(
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.percentage}</td>
                                    <td>{item.city}</td>
                                    <td>{item.state}</td>
                                   <td >
                                    <a onClick={()=>{EditData(item.id)}} className="btn btn-primary "><i class="fa-solid fa-pen-to-square"></i>  EDIT</a>
                                    <a onClick={()=>{DeleteData(item.id)}} style={{margin:"10px"}} className="btn btn-danger"><i class="fa-solid fa-trash"></i>  DELETE</a>
                                    <a onClick={()=>{AddInformation(item.id)}} className="btn btn-success"><i class="fa-solid fa-address-book"></i>ADD TO INFORMATION</a>
                                   </td>
                                
                                </tr>
                            ))}
                                
                            </tbody>
                        </table>

                    </div>
                    

                </div>

            </div>
        </div>
    )



}
export default StudentTable;