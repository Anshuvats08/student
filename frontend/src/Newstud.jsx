import React, { useState } from 'react'
import { useNavigate } from 'react-router';


function Newstud() {
    const[id,setid]= useState("");
    const[name, setname]=useState("");
    const[address,setaddress]=useState("");
    const[dob,setdob]=useState("");
    const[age,setage]=useState("");
    const[fee,setfee]=useState("");
    const[instalment,setinstalment]=useState("");
    const[error,seterror]=useState("");
    const navigate = useNavigate();

const submitdata = async () => {
      if (!id || !name || !address || !dob || !age || !fee || !instalment)
      {
        seterror(true);
        return false;
      }

      // list from index.js to connect with backend
        let result = await fetch('http://localhost:5000/list',{
        method: "post",
        body: JSON.stringify({ id,name,address,dob,age,fee,instalment }),
        headers: { "Content-Type": "application/json" },
      });

      // await=to handle promise 
        result = await result.json();
        if (result) {

          navigate("/Studlist");
        }
        
      }


     return (
    <>

    <div className='student1'>
      
            <div class="img1">
		      	<img src="child.jpg"/>
    </div>

    <div className='student2'>	
     <h1>NEW STUDENT</h1>
     
      <input
      type="text"
      placeholder="Enter id"
      value={id}
      onChange={(event)=> setid(event.target.value)}
      />
      {error && !id && <span>please enter id</span>}
      <br/>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(event) => setname(event.target.value)}
      /> 
      {error && !name && <span> Please enter name </span>}
      <br/>

      <input
      type="text"
      placeholder="Enter address"
      value={address}
      onChange={(event)=> setaddress(event.target.value)}
      />
      {error && !address && <span> please enter address </span>}
      <br/>


     <input
     type="date"
     placeholder='Enter DOB'
     value={dob}
     onChange={(event)=> setdob(event.target.value)}
     />

     {error && !dob && <span>please enter DOB</span>}
     <br/>

     <input
     type="number"
     placeholder="Enter age"
     value={age}
     onChange={(event)=>setage(event.target.value)}
     />

     {error && !age && <span>please enter age</span>}
     <br/>


     <input
     type='number'
     placeholder='Enter fee'
     value={fee}
     onChange={(event)=>setfee(event.target.value)}
     />

     {error && !fee && <span>please enter fee</span>} 
     <br/>

     <input
     type='number'
     placeholder='Enter instalment'
     value={instalment}
     onChange={(event)=> setinstalment(event.target.value)}
     />

     {error && !instalment && <span>please enter instalment</span>}
     <br/>

     <button className="side"type="button" onClick={submitdata}> Add Student </button>

     </div> </div>

     {/* <div className='txt'>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Deleniti numquam deserunt repellat ea nihil ducimus dolor nulla eum, rerum quas, 
        accusamus ex magnam expedita? Praesentium nesciunt cumque eius velit facere! Lorem, 
        dolor sit amet consectetur adipisicing elit. 
        Deleniti numquam deserunt repellat ea nihil ducimus dolor nulla eum, rerum quas, 
        accusamus ex magnam expedita? Praesentium nesciunt cumque eius velit facere!
      </p>
     </div> */}

     </>
 );
}

export default Newstud;
