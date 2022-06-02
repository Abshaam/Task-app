import React,{useState} from "react"
import { useNavigate, useParams, NavLink } from "react-router-dom";
import axios from "axios";
import pic7 from '../images/laundry.jpg'

export default function PasswordReset(){
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const redirect = useNavigate();

    const { resetToken } = useParams();

    const update =async (e) =>{
        try {
            e.preventDefault();
            await axios.put(`/users/reset-password/${resetToken}`, {
                newPassword,
            });

            setSuccess(true);

            window.setTimeout(() =>{
                redirect('/login');
            }, 6000);

        } catch (error) {
            console.log(error);
            setError(error.message)
        }
    };

    return success ? (
        <div className="success">
            <h1>Success</h1>
            <p>Your password has being changed</p>
            {/* <button onClick={() => redirect('/login')}> Login </button> */}
        </div>
    ) : (
        <>
        <div className='sign-heading'>
            <h1>Password reset</h1>
            {/* <button onClick={() => navigate('/signup')}> Signup </button> */}
            {error && <div className='err'>{error} </div>}
        </div>

        <button className='back-home'>
        <NavLink to = "/"> Home </NavLink>
        </button>
       <div className='log'>
         <div className='up'>
           <img src={pic7} alt=''/>
           </div>

         <div className='login'>
           <h1>Password reset</h1>
           
           
           <form onSubmit={update}>

             <input 
               type="password" 
               placeholder='type new password'
               value={newPassword}
               onChange={(e) => setNewPassword(e.target.value)}
               />

             <input 
               type="password" 
               placeholder='confirm new password'
               value={confirmPass}
               onChange={(e) => setConfirmPass(e.target.value)}
               />

               <button 
                type="submit"
                // disabled={!email || !password }
                >
                   reset password
                </button>
           </form>
       </div>

       </div>
     </>
    )

}