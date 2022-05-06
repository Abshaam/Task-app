import '../css/landing.css'
import React,{NavLink} from 'react-router-dom'
import pic1 from '../images/resarch.avif'
import pic2 from '../images/arrange.jpg'
import pic3 from '../images/drawingaplan.avif'
import pic4 from '../images/application.avif'
export default function Landing(){
    return(
        <>
          {/* Navbar */}
          <nav>
          <div className='logo'>TODO</div>
            <ul>
                  <NavLink to = "/"> Home </NavLink>
                  <NavLink to = "/about"> About </NavLink>
                  <NavLink to = "/signup"> Signup </NavLink>
                  <NavLink to = "/login"> Login </NavLink>
                  
            
            </ul>
          </nav>

          <div className='keep'>
              <h1> Keep track of your tasks with todo </h1>
          </div>
          

          <div className='acts'>
              <div className='act'>
                  <div className='imag'>
                      <img src={pic1} alt=''/>
                  </div>

                  <h2> Work on Project</h2>
              </div>

              <div className='act'>
                  <div className='img'>
                  <img src={pic2} alt=''/>
                  </div>

                  <h2> Organise your documents</h2>
              </div>

              <div className='act'>
                  <div className='img'>
                  <img src={pic3} alt=''/>
                  </div>

                  <h2>Draw a plan</h2>
              </div>

              <div className='act'>
                  <div className='img'>
                  <img src={pic4} alt=''/>
                  </div>

                  <h2>Send an Appliation</h2>
              </div>
              
          </div>

          <div className='footer'>
             <h2>Copyright Ushama@div 2022</h2> 
          </div>
        </>
    )
}