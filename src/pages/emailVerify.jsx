import '../css/emailVerify.css'
import { useState, useEffect } from 'react'
import { useNavigate, useParams,} from 'react-router-dom'
import pic1 from '../images/time.jpg'
import axios from 'axios'

export default function EmailVerify(){

    const [validUrl, setValidUrl] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()
   
    const { token } = useParams();

    useEffect (() =>{
        const verifyEmailUrl = async () =>{
            try {
                // e.preventDefault();
                await axios.get (`/users/${id}/verify/${token}`
                
                )
                
                setValidUrl(true);

                window.setTimeout(() =>{
                    navigate('/login');
                }, 6000);

            } catch (error) {
                console.log(error);
                setValidUrl(false)
            }
        }
        verifyEmailUrl()
    }, [token, id, navigate ])

    return(
       <>
           {validUrl?(
               <div className='log'>
               <div className='up'>
                 <img src={pic1} alt=''/>
                 </div>
   
               <div className='login'>
                 <h2 className='verified'>Email verified successfully</h2>
                 <button className='verified-button' onClick={() => navigate('/login')}> Login </button>
                 </div>
              </div>
           ) : (
               
            <div className="success">
            <h1>Hello!!</h1>
            <p>Please wait</p>
            
        </div>
           )}
       </> 
    )
}