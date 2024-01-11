import React from 'react'
import{Link , useNavigate} from 'react-router-dom';

const Nav=()=> {
  const auth= localStorage.getItem('user');
  const navigate=useNavigate()
  const clearuser=()=>{
  localStorage.clear();
  navigate("/Newstud")
  }

  return (
    
    <div className='nav'>

      <div style={{"width":"15%", "display":"flex","justify-content":"center"}}>
      <img src='stud.png' 
       style={{"height":"100px", "width":"100px","border-radius":"50px"}}/>
      </div>

      <div className='nn'><lable>Student Data</lable></div>

      <div style={{"width":"80%","text-align":"center"}}/>
      
      <ul>
        {auth?(
          <>
          
          <li><Link className='oo' to="/Newstud">New Student</Link></li>
          <li><Link className='oo' to="/Studlist">Student list</Link></li>
          <li><Link className='oo' onClick={clearuser} to="/Signup"> Logout </Link> </li>

          </>
):(
  <>
          <li><Link className='oo' to="/signin">Signin</Link></li>
          <li><Link className='oo' to="/signup">Signup</Link></li>
          </>
)}
     </ul>
     </div>
    
  )
}

export default Nav
