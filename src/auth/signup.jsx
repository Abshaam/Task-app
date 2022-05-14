import '../css/signup.css'
import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import pic1 from '../images/resarch.avif'

 function Signup(){
    const [name, setName] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [confirmpassword, setConfirmpassword] = useState("")
    const [errorMessage, setErrorMessage]= useState("")
    
    
    
    const navigate = useNavigate();

    const signup = async (e) =>{
      try{
          e.preventDefault();
          const response = await axios.post(
              "/users/signup",
              
              {
                 name,
                 email,
                 password
              }, { withCredentials: true}
              
          );

          const { data } = response;

          console.log(response)
          console.log(errorMessage)

          if (data.toString().includes('400')){
            setErrorMessage('please enter an email');
          }

          console.log('data');
          if (data.user) {
              // replace the browser history stack from going back
              navigate("/login", {replace: true});
          }
      }catch (error){
          console.log(error);
      }
  };

    return(
        <>
          <div className='sign-heading'>
               <h1>Already have an account?</h1>
               <button onClick={() => navigate('/login')}> Login </button>
           </div>
          <div className='sign'>
            <div className='up'>
              <img src={pic1} alt=''/>
              </div>

            <div className='signup'>
              <h1>Signup</h1>
              
              <form onSubmit={signup}>
                  <input 
                  type="name"
                  name='n' 
                  placeholder='type full name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />

                 <input 
                  type="email" 
                  name='e'
                  placeholder='type email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />

                <input 
                  type="password" 
                  name='p'
                  placeholder='type password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />

                 <input 
                  type="password" 
                  name='p'
                  placeholder='Confirm password'
                  value={confirmpassword}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                  />
 

                  <button 
                   type="submit"
                   disabled={!email || !password || !name}>
                       Signup
                   </button>
              </form>
          </div>

          </div>
        </>
    )
}

export default Signup