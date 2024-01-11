import React,{useEffect,useState} from 'react'
import {useParams, useNavigate } from 'react-router-dom';

function Updatestud() {
  const[id,setid]=useState("");
  const [name,setname]=useState("");
  const[age,setage]=useState("")
  const[dob,setdob]=useState("");
  const[address,setaddress]=useState("");
  const[fee,setfee]=useState("");
  const navigate = useNavigate();
  const params=useParams();

 
  useEffect(()=>{
    getdata();
  },[])

  const getdata=async()=>{
    let result=await fetch(`http://localhost:5000/stulist/${params.id}`);
    result=await result.json();
    setid(result.id);
    setname(result.name);
    setage(result.age);
    setdob(result.dob);
    setaddress(result.address);
    setfee(result.fee);
  }
  
  const submitdata = async () => {
    
   let result = await fetch(`http://localhost:5000/stulist/${params.id}`, {
      method: "put",
      body: JSON.stringify({ name, age, dob,address,fee, }),
      headers: { "Content-Type": "application/json" },
    });

    result = await result.json();
    if (result) {

      navigate("/Studlist");
    }
  };


  return (
    <div className='update'>
      <h1>UPDATE STUDENT</h1>

      <input
      type='number'
      placeholder='Enter Id'
      value={id}
      onChange={(event)=> setid(event.target.value)}
      /> <br/>

      <input
      type='text'
      placeholder='Enter name'
      value={name}
      onChange={(event)=>setname(event.target.value)}
      /> <br/>

      <input
      type="text"
      placeholder='enter address'
      value={address}
      onChange={(event)=>setaddress(event.target.value)}
      /> <br/>

      <input
      type='number'
      placeholder='enter age'
      value={age}
      onChange={(event)=>setage(event.target.value)}
      /> <br/>

      <input
       type='date'
       placeholder='enter dob'
       value={dob}
       onChange={(event)=>setdob(event.target.value)}
       /> <br/>

       <input
       type='number'
       placeholder='enter fee'
       value={fee}
       onChange={(event)=>setfee(event.target.value)}
       /> <br/>

     <button className="side"type="button" onClick={submitdata}> Update Product </button>

      </div>
  )
} 

export default Updatestud
