import '../css/signup.css'
import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import pic1 from '../images/resarch.avif'

 function Signup(){
    const [name, setName] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [errorMessage, setErrorMessage]= useState("");
    const [message, setMessage] = useState("");
    const [successful, setSuccessful] = useState("");
    
   
    
    const navigate = useNavigate();

    const signup = async (e) =>{
      try{
          e.preventDefault();

          if(password !== confirmpassword) {
            return setErrorMessage('password do not match');
        }

          const { data: res }  = await axios.post(
              "/users/signup",
              
              {
                 name,
                 email,
                 password
              });

              setMessage(res.message)
              setSuccessful(true);

              setTimeout(() =>{
                navigate('/login');
            }, 6000)
    

         
          console.log(res)
          console.log(errorMessage)

         

          // if (res.user) {
              // replace the browser history stack from going back
              // navigate("/login", {replace: true});
          // }  
      }catch (error){
          console.log(error);
          if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ){
            setErrorMessage(error.response.data.message)
          }

      }
  };

  return successful ? (

    <div className='success'>
      <h1>Success</h1>
      <p>Please check email for verification link</p>
    </div>

  ) : (

    <>

    <div className='sign-heading'>
      <h1> Already have an account?</h1>
        <button onClick={() => navigate('/login')}> Login </button>
    </div>

    <div className='sign'>
      <div className='up'>
         <img src={pic1} alt=''/>
      </div>
    

    <div className='signup'>
              <h1>Signup</h1>

              {message && <div className='error'> { message } </div>}

              {errorMessage && <div className='error'> { errorMessage} </div>} 
              
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

                 {/* {emailError && <div className='errorMessage'> { emailError} </div>}         */}

                <input 
                  type="password" 
                  name='p'
                  placeholder='type password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />

                 {/* {passwordError && <div className='error'> { passwordError} </div>} */}

                 <input 
                  type="password" 
                  name='p'
                  placeholder='Confirm password'
                  value={confirmpassword}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                  />
 

                  <button 
                   type="submit"
                  //  disabled={!email || !password || !name || !confirmpassword}
                   >
                       Signup
                   </button>
 
              </form>
          </div>

          </div>

    
    </>
   )

  }

//   return success ? (

//     <div className="success">
//         <h1>Success</h1>
//         <p> Please check email for verification link</p>
//     </div>

//        ) : (

//            <>

//             <div className='sign-heading'>
//                <h1>Already have an account?</h1>
//                <button onClick={() => navigate('/login')}> Login </button>
//            </div>
//              <div className='sign'>
//                <div className='up'>
//                  <img src={pic1} alt=''/>
//                   </div>

//             <div className='signup'>
//               <h1>Signup</h1>

//               {message && <div className='error'> { message } </div>}

//               {errorMessage && <div className='error'> { errorMessage} </div>} 
              
//               <form onSubmit={signup}>
//                   <input 
//                   type="name"
//                   name='n' 
//                   placeholder='type full name'
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   />

//                  <input 
//                   type="email" 
//                   name='e'
//                   placeholder='type email'
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   />

//                  {/* {emailError && <div className='errorMessage'> { emailError} </div>}         */}

//                 <input 
//                   type="password" 
//                   name='p'
//                   placeholder='type password'
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   />

//                  {/* {passwordError && <div className='error'> { passwordError} </div>} */}

//                  <input 
//                   type="password" 
//                   name='p'
//                   placeholder='Confirm password'
//                   value={confirmpassword}
//                   onChange={(e) => setConfirmpassword(e.target.value)}
//                   />
 

//                   <button 
//                    type="submit"
//                   //  disabled={!email || !password || !name || !confirmpassword}
//                    >
//                        Signup
//                    </button>
 
//               </form>
//           </div>

//           </div>
//         </>
//     )
// }

export default Signup;