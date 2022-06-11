import {Get_Todo, Add_Todo, Complete_Todo, Counter_dec, Counter_inc, Delete_Todo, Update_Todo } from "./actiontype";

export const countInc=()=>({type: Counter_inc});
export const countDec=()=>({type: Counter_dec});

export const todoAdd=(payLoad)=>({type:Add_Todo,payLoad});
export const todoComplete=(id)=>({type:Complete_Todo,payLoad:id});
export const todoUpdate=(payLoad)=>({
    type:Update_Todo,
payLoad});

export const todoRemove=(id)=>({type:Delete_Todo,payLoad:id});



