import { Counter_dec, Counter_inc } from "./actiontype";

export const counterReducer=(state={count:0},{type,payLoad})=>{
switch(type){
    case Counter_inc:{
        state.count++;
        return {...state}
    }
    case Counter_dec:{
        state.count--;
        return {...state}
    }
    default:{
        return state;
    }
}
}