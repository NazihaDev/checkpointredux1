import React ,{useState} from 'react';
import{button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import{useDispatch,useSelector}from'react-redux';
import{add}from'./redux/Todo'
function AddTask(){
    const todo =useSelector((state)=>state.todos)
    const DIspatch = useDispatch()
const[input,setInput]=useState("")
const handelAdd=()=>{
    DIspatch(add(input))
}
    return(
        <div className="d-flex justify-content-center p-2 mb-3" style={{gap:"1em"}}>
        <imput placeholder ="Enter your task here" onChange={(e)=>setInput(e.target.value)}></imput>
        <Button varient="succes" onClick={()=>handelAdd()}>Add Task</Button>
        </div>

    )
};
export default AddTask