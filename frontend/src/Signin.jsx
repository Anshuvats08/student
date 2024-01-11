import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const[error,seterror]=useState("");
  
  const navigate = useNavigate();
  const submitdata = async () => {
    if (!email || !password ){
      seterror(true);
      return false;
    }
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();

    if (result) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/Newstud");
    }
  };
  return (
    <div className="signin">
      <h1 className="side">SIGN IN</h1>
      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(event) => setemail(event.target.value)}
      />

      {error && !email && <span> Enter email </span>}

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(event) => setpassword(event.target.value)}
      />
            {error && !password && <span> Enter password </span>}


      <button className="side" type="button" onClick={submitdata}> SIGN IN </button>
        
    </div>
  );
}

export default Signin;
