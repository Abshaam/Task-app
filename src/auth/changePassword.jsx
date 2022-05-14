import '../css/changePassword.css'
import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import pic7 from '../images/arrange.jpg'

// import axios from 'axios';

export default function ChangePassword(){
    const navigate = useNavigate()

    // using useState to set state hoping to later change them
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPass, setConfirmNewPass] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    // using axios to communicate from the backend
    const change = async (e)=>{
        try {

            e.preventDefault();

            if(newPassword !== confirmNewPass) {
                return setError('password do not match');
            }

            await axios.post('users/reset-password', {
                password: oldPassword,
                newPassword
            })

            setSuccess(true);

            setTimeout(() =>{
                navigate('/');
            }, 6000)
        } catch (error) {
            console.log(error);
            setError(error.response.data.msg);
            
            if(error.response.status === 400) {
                return setError(error.response.data.msg)
            }

            if(error.response.status === 401) {
                return setError(error.response.data.msg)
            }

            if(error.response.status === 403) {
                return setError(error.response.data.msg)
            }
            
        }
    }

    return success ? (
        <>
        <div>
            <h1>Password successfully changed</h1>
            <p>Please login with new password</p>
        </div>

        <div className='sign-heading'>
            <h1>Login with new password</h1>
            <button onClick={() => navigate('/login')}> Login </button>
        </div>
        </>
    ) : (
        <>
        <div className='sign-heading'>
            <h1>Change Password</h1>
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
           <h1>Change Password</h1>
           
           
           <form onSubmit={change}>

              <input 
               type="password" 
               placeholder='type old password'
               value={oldPassword}
               onChange={(e) => setOldPassword(e.target.value)}
               />

             <input 
               type="password" 
               placeholder='type new password'
               value={newPassword}
               onChange={(e) => setNewPassword(e.target.value)}
               />

             <input 
               type="password" 
               placeholder='confirm new password'
               value={confirmNewPass}
               onChange={(e) => setConfirmNewPass(e.target.value)}
               />

               <button 
                type="submit"
                // disabled={!email || !password }
                >
                   change password
                </button>
           </form>
       </div>

       </div>
     </>
    )
}