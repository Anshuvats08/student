import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
function Studlist() {

  const[list,setlist]= useState([]);

    useEffect(() => {getlist();}, [])

    // stulist= name of api in index.js

    const getlist=async () => {
      let result = await fetch('http://localhost:5000/stulist')
      result = await result.json();
      setlist(result);
  }
    
    const searchbox= async (event) =>{
      let key = event.target.value;
      if (key)
      {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      if(result)
      {
        setlist(result)
      }
    }
      else
      {
        getlist()
      }
    }

    const deletelist = async (item)=>{
    let result = await fetch(`http://localhost:5000/stulist/${item}`,
      {method:"Delete" });
    result = await result.json();
    if(result)
    {
      getlist();
    }
  }

return (
      <>
     <h2 style={{"textAlign":"center"}}>STUDENT LIST</h2>

    <div className='search-container'>
      <input
      type="text"
      className='search-input'
      placeholder='enter for search'
      onChange={searchbox}/>
      </div>      

    <div className="list">
          
          <table border="1" height ="200px" width="400px">
            <tr>
              <th>S.ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>DOB</th>
              <th>ADDRESS</th>
              <th>FEE</th>
            </tr>

            {list.length>0?list.map((item,index)=> {
         return (
          <tr>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.dob}</td>
            <td>{item.address}</td>
            <td>{item.fee}</td>

            
            <td><button onClick={()=> deletelist(item._id)}>Delete</button>
            <button><Link style={{textDecoration:"none"}} 
            to={`/updatestud/${item._id}`}>update</Link>
            </button>
            </td>
          </tr>
         );
            }):<td colSpan="6">NO RESULT</td>
          }
          </table>
      </div> 
    </>
     
    );
  } 

export default Studlist;
