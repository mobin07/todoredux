import { Add_Todo, Complete_Todo, Delete_Todo, Update_Todo } from "./actiontype";

export const todoReducer=(state={todos:[]},{type,payLoad})=>{
switch(type){
    case Add_Todo:{
        
        return {...state,todos:[...state.todos,{...payLoad,id:state.todos.length},],};
    }
    case Complete_Todo:{
        return {...state};
    }
    case Update_Todo:{
        return {...state};
    }
    case Delete_Todo:{
        return {...state};
    }
    default:{
        return state;
    }
}
}