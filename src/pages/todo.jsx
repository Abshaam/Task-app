import "../css/todo.css"
export default function Todo ({todo, del, update, handleChange}){
    return(
        
        <div
        style={
            todo.status === "pending" ? {backgroundColor: 'white'} : {backgroundColor: "rgb(233, 215, 167)"}
        }
         className="wrapper"
        > 

            <p>{todo.todo}</p>


        <div className='button'>

        {/* <label htmlFor="check">
                Done?
                <input type="checkbox"
                // value={checked}
                onChange= {handleChange} /> 
       </label> */}

            {<button className='status-button'  
         onClick={() => update(todo._id)}>{todo.status} </button> } 

           
            <button className='delete-button' onClick={() => del(todo._id)}> Delete </button> 
        </div>
            
        </div>
    )
}