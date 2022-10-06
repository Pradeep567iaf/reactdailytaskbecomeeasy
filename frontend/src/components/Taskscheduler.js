import React, { Component } from 'react';
import {useState} from 'react';
import * as axios from 'axios';
import {useNavigate} from "react-router-dom"

function  Taskscheduler()  {
    const [result,setResult] = useState("")
    const [firstname,setFirstname] = useState("")
    const [lastname,setLastname]= useState("")
    const [email,setEmail] = useState("")
    const [phonenumber,setPhonenumber] = useState("")
    const [jobtitle,setJobtitle]= useState("")
    const [jobdesc,setJobdesc]= useState("")
    const [jobdate,setJobdate] = useState("")
    const navigate = useNavigate();
    
    // console.log(result,typeof(result))
    const change = async (e)=>{
        e.preventDefault()
        let formData = new FormData();
        console.log(firstname)
        console.log(lastname)
        console.log(email)
        console.log(phonenumber)
        console.log(jobtitle)
        console.log(jobdesc)
        console.log(jobdate)
        formData.append("firstname",firstname)
        formData.append("lastname",lastname)
        formData.append("email",email)
        formData.append("phonenumber",phonenumber)
        formData.append("jobtitle",jobtitle)
        formData.append("jobdesc",jobdesc)
        formData.append('jobdate',jobdate)
        console.log(formData)
        alert("axios request created")
        
        await axios({
            method : 'post',
            url : 'http://127.0.0.1:8000/submittask/',
            data : formData,
            headers : {
                "Access-Control-Allow-Origin": "true"
            }
        }).then((response)=>{
            console.log(response.data['msg'])
            setResult("TASK ADDED");
            
            navigate('/')

        })
      

        // axios({
        //     url:"http://127.0.0.1:8000/submittask",
        //     method:"POST",
        //     data:formData,
        // }).then((res)=>{
        //   console.log(res);
        //   setResult("TASK ADDED")
        // })


        // axios.post("http://127.0.0.1:8000/submittask", {
        //     data:formData,
        // })
        // .then((res) => {
        //     console.log(res);
        //     setResult("TASK ADDED")
        // });
    
        

        
         
        
   
        
    }


    return (
      <div>
      <div className="container-fluid px-1 py-5 mx-auto">
      <div className="row d-flex justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
              
              <div className="card">
                  
                  <p  className="show-result font-effect-shadow-multiple">{result}</p>
                  
                 
                  <h5 className="text-center mb-4">DAILY TASK SCHEDULER</h5>
                  <form className="form-card" onsubmit="event.preventDefault()">
                      <div className="row justify-content-between text-left">
                          <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">First name<span className="text-danger"> *</span></label> 
                          <input type="text" id="fname" name="fname" placeholder="Enter your first name" value={firstname}  onChange={(e)=>setFirstname(e.target.value)} /> </div>
                          <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Last name<span className="text-danger"> *</span></label>
                         <input type="text" id="lname" name="lname" placeholder="Enter your last name" onblur="validate(2)" value={lastname}  onChange={(e)=>setLastname(e.target.value)}/> </div>
                      </div>
                      <div className="row justify-content-between text-left">
                          <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3"> Email<span className="text-danger"> *</span></label> 
                          <input type="text" id="email" name="email" placeholder="Enter Email address" onblur="validate(3)" value={email}  onChange={(e)=>setEmail(e.target.value)}/> </div>
                          <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Phone number<span className="text-danger"> *</span></label>
                           <input type="text" id="mob" name="mob" placeholder=" Enter Phone Number" onblur="validate(4)" value={phonenumber}  onChange={(e)=>setPhonenumber(e.target.value)}/> </div>
                      </div>
                      <div className="row justify-content-between text-left">
                          <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Job title<span className="text-danger"> *</span></label> 
                          <input type="text" id="job" name="job" placeholder="Job Title" onblur="validate(5)" value={jobtitle}  onChange={(e)=>setJobtitle(e.target.value)}/> </div>
                          <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Enter Job Date<span className="text-danger"> *</span></label> 
                          <input type="date" id="jobdate" name="jobdate" placeholder="Enter Job Date" onblur="validate(6)" value={jobdate}  onChange={(e)=>setJobdate(e.target.value)}/> </div>
                      </div>
                      <div className="row justify-content-between text-left">
                          <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">Would you like to add the task description?<span className="text-danger"> *</span></label> 
                          <input type="text" id="ans" name="ans" placeholder="Job Description" onblur="validate(6)" value={jobdesc}  onChange={(e)=>setJobdesc(e.target.value)}/> </div>
                      </div>
                      <div className="row justify-content-end">
                        <div className="form-group col-sm-6"> <button type="submit" className="btn-block btn-outline-primary" onClick={change}>SUBMIT TASK</button> </div>
                    </div>
                  </form>
              </div>
          </div>
      </div>
  </div>

      
      
  
        
      </div>
    )
  
}

export default Taskscheduler
