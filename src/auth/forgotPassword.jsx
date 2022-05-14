import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import '../css/forgotPassword.css'
import pic7 from '../images/notingprojects.avif'

export default function ForgotPassword(){
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError]= useState("");

    const change = async (e) => {
        e.preventDefault();
        const response = await axios.put(`users/forgot-password/${email}`,{
            email:email
        });

        console.log(response);
    }

    // setSuccess(true);

    return success ? (
        <div className="success">
            <h1>Success</h1>
            <p> Please check email for reset link</p>
            {/* <button onClick={() => redirect('/login')}> Login </button> */}
        </div>
    ) : (
        <>
        <div className='sign-heading'>
            <h1>Forgot Password</h1>
        </div>

        <button className='back-home'>
        <NavLink to = "/"> Home </NavLink>
        </button>
       <div className='log'>
         <div className='up'>
           <img src={pic7} alt=''/>
           </div>

         <div className='login'>
           <h1>Forgot Password?</h1>
           <p>Enter your email and we will send you a reset link</p>
           {error && <div className='err'>{error} </div>}
           
           
           <form onSubmit={change}>

             <input 
               type="email" 
               placeholder='someone@gmail.com'
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               />

               <button 
                type="submit"
                // disabled={!email || !password }
                >
                   send link
                </button>
           </form>
       </div>

       </div>
     </>
    )
}