import React from 'react'
//import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import {delet,togueltodo,edittodo} from'./redux/Todo'

function Task({todo}){
const DIspatch=useDispatch();
const handelTogel=(id)=>{
    DIspatch(togueltodo(id))
}
const handelDele=(id)=>{
    DIspatch(delet(id))
}
const handelEDit=(id)=>{
    DIspatch(edittodo(id))
}
    


    return(
       /* <div className="d-flex align-items-center justify-content-between mb-3">
            <div
                style={{flex:"1",padding :".3em",border:"1px solid black",marginRight:"1em"}}
                <div className="d-flex justify-content-between align-items-center">
                    {todo.description}
                    <input style={{width:"1.3em",height:"1.3em"}}
                    type="checkbox"
                    onClick={()=>handelTogel(todo.id)}
                    checked={todo.isDone}
                    />
                </div>
        </div>
        <div className="d-flex" style = {{"gap:"1em}}>
        <button variant="info"onClick={()=>handelEDit(todo.id)}>Edit</button>
        <button variant="warning"onClick={()=>handelDele(todo.id)}>Delete</button>
        </div>*/
       
    )
}