 import { createSlice } from "@reduxjs/toolkit";
import{v4 as uuidv4} from 'uuid';
const todoSlice = createSlice({
    name:'todos',
    initialState:[{
        id:uuidv4(),
        description:"my name is naziha",
        isDone:true,
    },
    {
        id:uuidv4(),
        description:"welecome to beja",
        isDone:false,
    },
    {
        id:uuidv4(),
        description:"I like devellopement",
        isDone:true,
    }],
    reducer:{
        //ajout
        add:(state,action) =>{
            const newTask ={
                id:uuidv4(),
                description:action.payload,
                isDone:false,
            }
            state.push(newTask)
        },
        //delete
        delete:(state,action)=>{
            return state.filter((e)=>e.id!==action.payload)
        },
        //toggel
        togueltodo:(state,action)=>{
            return state.map((e)=>{
                if(e.id === action.payload){
                    return{...e,isDone:!e.isDone}
                }else{return e }
            })        }

    },
    //edit
    edittodo:(state,action)=>{
        const index =state.findIndex((e)=> e.id ===action.payload)
        state[index].description = prompt('Test');       
    }
})
export const{add,delet,togueltodo,edittodo} = todoSlice.actions;
export default todoSlice.reducer
