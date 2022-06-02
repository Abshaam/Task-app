// requiring all modules
import '../css/login.css'
import React,{useState} from 'react';
import {useNavigate, NavLink} from 'react-router-dom'
import axios from 'axios';
import pic7 from '../images/time.jpg'

// export default makes the variable available to import
export default function Login(){

    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [error, setError] = useState('');
    const [message, setMessage] = useState("");
   

    // usenavigate is responsible for redirection
    const navigate = useNavigate()

    // this is an axios request to communicate to the database
    const login = async (e) =>{
        try{
            e.preventDefault();
            const res = await axios.post(
                "/users/login",
                {
                    email,
                    password
                }, { withCredentials: true}
                 
            );

            // assigning a variable to the feedback from the server
            const {data} = res;
            setMessage(res.message)
            console.log(data.user);

            // when user inputs the details the input fields becomes empty after submitting
            setEmail('')
            setPassword('')

            if (data.user) {
                // replace the browser history stack from going back
                navigate("/add", {replace: true});
                window.localStorage.setItem('id', JSON.stringify(data.user._id));
                window.localStorage.setItem("name", JSON.stringify(data.user.name));
            }
        }catch (error){
            console.log(error.response.data);
            if (
              error.response &&
              error.response.status >= 400 &&
              error.response.status <= 500
            ){
              setError(error.response.data.message)
            }

            if (error.response.data === "Authentication failed") {

                return(setError (error.response.data))
            }

            if(error.message.includes('201')) {
                setMessage(error.response.data)
              }

            // if(error.message.includes('400')) {
            //     setMessage(error.response.data)
            //   }

            

            // if (error.response.data === "Authentication failed") {

            //     return(setPasswordError (error.response.data))
            // }
        }
    };  


    return(
        <>
           <div className='sign-heading'>
               <h1>Don't have an account?</h1>
               <button onClick={() => navigate('/signup')}> Signup </button>
           </div>

           <button className='back-home'>
            <NavLink to = "/"> Home </NavLink>
            </button>
         

          <div className='log'>
            <div className='up'>
              <img src={pic7} alt=''/>
              </div>

            <div className='login'>
              <h1>Login</h1>

              {message && <div className='error'> { message } </div>}
              
              
              <form onSubmit={login}>

              {error && <div className='error'> { error} </div>}

                 <input 
                  type="email" 
                  placeholder='type email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                  {/* {emailError && <div> { emailError} </div>} */}

                <input 
                  type="password" 
                  placeholder='type password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
                  
                  

                  <div className='forget'>
                     <h1> forget password?</h1>
                     <button onClick={() => navigate('/forgot')}> enter email </button>

                  </div>

                  <button 
                   type="submit"
                  //  disabled={!email || !password }
                  >
                      Login
                   </button>
              </form>
          </div>

          </div>
        </>
    )
}

