import './App.css';
import { Routes, Route } from 'react-router-dom';

// importing all required components to render
import Landing from './pages/landing';
import Signup from './auth/signup' 
import Login from './auth/login';
// import Logout from './Task';
import Task from './Task';
import ChangePassword from './auth/changePassword';
import PasswordReset from './pages/passwordReset';
import ForgotPassword from './auth/forgotPassword';

function App() {
  return (
    <Routes>
          <Route exact path ='/' element={<Landing />}/>
          <Route path ='/add' element={<Task/>}/>
          <Route path  ='/login' element={<Login/>}/>
          <Route path ='/signup' element={<Signup/>}/>
          <Route path ='/change' element={<ChangePassword/>}/>
          <Route path ='/reset' element={<PasswordReset/>}/>
          <Route path ='/forgot' element={<ForgotPassword/>}/>
          
        </Routes>
  );
}

export default App;
