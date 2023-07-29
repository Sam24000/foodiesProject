import React, { useState } from 'react'

import {Link, useNavigate} from 'react-router-dom'


export default function Signup() {
    
    const navigate= useNavigate();

    const [credential, newcredential] = useState({ name: "", password: "", email: "" }) // hoooks

    // connecting with backend
    const handlesubmit = async (e) => {     

       e.preventDefault();
       console.log({ name: credential.name, password: credential.password, email: credential.email });
        const result = await fetch("http://localhost:5000/api/path", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({ name: credential.name, password: credential.password, email: credential.email })
        });

        const json = await result.json();
        console.log(json);
        if (!json.success) {
            alert("Wrong Input");
        }
        else{
            alert("Account created");
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

                        <div className="form-group row">
                            <label htmlFor="inputName" className="col-sm-1 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputName" name='name' value={credential.name} onChange={select} />
                            </div>
                        </div>
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
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <Link to="/login" className="m-3 btn btn-secondary"> Already have an account</Link>
                    <Link to="/" className="m-3">Back to Home</Link>
                </form>
            </div>
        </>
    )
}