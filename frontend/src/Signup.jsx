import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const[error,seterror]=useState("");

  const navigate = useNavigate();

  useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth)
    {
      navigate('/')
    }
  })
  const submitdata = async () => {
    if (!name || !email || !password ){
      seterror(true);
      return false;
    }
    let result = await fetch("http://localhost:5000/admins", {
      method: "post",
      body: JSON.stringify({ name, password, email }),
      headers: { "Content-Type": "application/json" },
    });

    result = await result.json();
    if (result) {

      navigate("/Signin");
    }
  };

 
  return (
    <div className="signup">
      <h1 className="side" >Student Register</h1>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(event) => setname(event.target.value)}
      />
            {error && !name && <span> enter name </span>}

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(event) => setpassword(event.target.value)}
      />
            {error && !password && <span> enter password </span>}

      <input
      type="text"
      placeholder="Enter email"
      value={email}
      onChange={(event) => setemail(event.target.value)}
      />
            {error && !email && <span> enter email </span>}


      <button className="side" type="button" onClick={submitdata}> SIGN UP </button>
    </div>
  );
}

export default Signup;
