import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

  
  const [credential, newcredential] = useState({ password: "", email: "" }) // hoooks
let navigate = useNavigate();
  // connecting with backend
  const handlesubmit = async (e) => {     

     e.preventDefault();
     console.log({ password: credential.password, email: credential.email });
      const result = await fetch("http://localhost:5000/api/loginuser", {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body:JSON.stringify({ password: credential.password, email: credential.email })
      });

      const json = await result.json();
      console.log(json);
      if (!json.success) {
          alert("Wrong Input");
      }
      else{
        localStorage.setItem("authtoken", json.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate('/');
      }
  }

    // onchange func.
  const select = (event) => {
      newcredential({ ...credential,[event.target.name]:event.target.value })
  }

  return (
    <>
      <div className='container m-3'>
        <form onSubmit={handlesubmit}>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-1 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="text" readonly className="form-control" id="staticEmail" name='email' placeholder="email" value={credential.email} onChange={select} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword" className="col-sm-1 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword" name='password' placeholder="Password" value={credential.password} onChange={select} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/signup" className="m-3 btn btn-secondary"> Don't have an account</Link>
          <Link to="/" className="m-3">Back to Home</Link>

        </form>
      </div>
    </>

  )
}