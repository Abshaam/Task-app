import './App.css';
import { Routes, Route } from 'react-router-dom';

// importing all required components to render
import Landing from './pages/landing';
import Signup from './auth/signup' 
import Login from './auth/login';
// import Logout from './Task';
import Task from './Task';

function App() {
  return (
    <Routes>
          <Route exact path ='/' element={<Landing />}/>
          <Route path ='/add' element={<Task/>}/>
          <Route path  ='/login' element={<Login/>}/>
          <Route path ='/signup' element={<Signup/>}/>
        </Routes>
  );
}

export default App;
