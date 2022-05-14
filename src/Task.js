import './App.css';
import React, {  useEffect,useState } from "react";
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import Todos from './pages/todos';

export default function Task() {
  const [input, setInput] = useState('')
  const [completed, setCompleted]= useState(0)
  const[todos, setTodos]= useState ([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMeessage] = useState('')
  const [error, setError] = useState(false)
  const navigate= useNavigate()

  const getCompleted = () =>{
    const done= todos.filter(todo => {
      return (todo.status === 'Done')
    })
    setCompleted(done.length)
  }

  useEffect(()=>{
    getCompleted()
    console.log(completed);
  })


  
    const addTodo = async (e, id) =>{
      try{
        e.preventDefault()
        setLoading(true)
      const newTodo = {
        todo:input
      }

   
     const add = await axios.post(`/todos/${JSON.parse(localStorage.getItem('id'))}`, newTodo,
     );

     setInput('')
      console.log(add.data)

      setLoading(false)

    } catch (error) {
      setError(true)
      setErrorMeessage(error.message)
      console.log(error)
    }

  };
  
  useEffect(() =>{
    const fetchTodos = async () =>{
      const todos = await axios.get(`/users/user-todos/${JSON.parse(localStorage.getItem('id'))}`, 
     
      );
      console.log('abcdef', todos)

      const {data} = todos;

      setTodos(data.todos)
    }

    fetchTodos()
  },[loading])

  const logout = async ()=>{
    await axios('/users/logout',
    );
    navigate('/login')


    console.log('logout')
  }


  const deleteTodo = async(id) =>{
    try{
      setLoading(true)
    const todo = await axios.delete(`/todos/${id}`,
    
    );
    console.log(todo);

    setLoading(false)

    } catch (error) {
    console.log(error)
       }
   
  }

  // updating a todo
  const updateTodo = async (id) =>{
    setLoading(true)
    const todo = await axios.get(`/todos/${id}`,
    );

    const { data } = todo;

    if(data.status === 'pending') {
      await axios.put(`/todos/${data._id}`,{
        status: 'done'
      },
     
      );
    } else{
      await axios.put(`/todos/${data._id}`,{
        status: 'pending'
      },
      
      );
    }
    setLoading(false)
    }

  
  return (
    < >
     <div>
     <button
      className='signout'
       onClick={logout}>
         logout
      </button>

      <button
      className='signout'>
      <NavLink to = "/change"> Change password </NavLink>
      </button>
     </div>
     
    <div className='adding' >
      {error && (
        <div style= {{color: "red", fontSize: "3rem", textAlign: "center"}}> {errorMessage} </div>
      )}

      <span>
        {JSON.parse(localStorage.getItem('name'))}
      </span>

      <h1> A todo Application </h1>
    <input 
    placeholder='Type your todo here' 
    type={"text"}
    value={input} 
    onChange={(e) => setInput(e.target.value)}>
    </input>

    {loading && (
      <div style={{color: "red", fontSize: "3rem"}}>
        please wait......
        </div>
    )}

    <button  disabled= {!input} onClick = {addTodo}>Add todo</button>
    {todos.length > 0 &&(
      <p>{completed} {completed > 1 ? "tasks" : "task" } completed of {''} {todos.length}</p>
    )}

    </div>
    
      <Todos tasks={todos}
       deleteTodo={deleteTodo}
        update ={updateTodo}
       />
    </>
  );
}



// adding a todo
// const addTodo = () =>{
//   const newTodo = {
//     id: todos.length + 1,
//     todo: input,
//     status: "pending"
//   }
//   setTodos([...todos, newTodo])
//   setInput('')
//   input(!setInput)
// }

// const update = (id) =>{
  //  const mapped = todos.map(item=>{
  //     return item.id === id? {...item, status: item.status === "pending" ? "Done" : "pending"} : {...item}
  //   })
  //   setTodos([...mapped])
  
  // }