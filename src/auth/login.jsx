import '../css/login.css'
import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import pic7 from '../images/time.jpg'

export default function Login(){

    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");

    const navigate = useNavigate()

    const login = async (e) =>{
        try{
            e.preventDefault();
            const response = await axios.post(
                "/users/login",
                {
                    email,
                    password
                },
                 
            );

            const {data} = response;
            console.log(data.user);

            setEmail('')
            setPassword('')

            if (data.user) {
                // replace the browser history stack from going back
                navigate("/add", {replace: true});
                window.localStorage.setItem('id', JSON.stringify(data.user._id));
                window.localStorage.setItem("name", JSON.stringify(data.user.name));
            }
        }catch (error){
            console.log(error);
        }
    };


    return(
        <>
           <div className='sign-heading'>
               <h1>Don't have an account?</h1>
               <button onClick={() => navigate('/signup')}> Signup </button>
           </div>
          <div className='log'>
            <div className='up'>
              <img src={pic7} alt=''/>
              </div>

            <div className='login'>
              <h1>Login</h1>
              
              
              <form onSubmit={login}>

                 <input 
                  type="email" 
                  placeholder='type email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />

                <input 
                  type="password" 
                  placeholder='type password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />

                  <button 
                   type="submit"
                   disabled={!email || !password }>
                      Login
                   </button>
              </form>
          </div>

          </div>
        </>
    )
}

