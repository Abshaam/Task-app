import Todo from "./todo"
import "../css/todo.css"

export default function Todos ({tasks, deleteTodo, update, handleChange,}){
    console.log(tasks)
    return(
        <>
        {
            tasks.length ? (
            tasks.map (todos =>(
                <Todo todo ={todos} key={todos._id} del={deleteTodo} update={update} handleChange={handleChange}/>
            ))
            ) :
                <div className="none">No todos to show at the moment</div>
              }
            


        
        
        </>
           
    )
}