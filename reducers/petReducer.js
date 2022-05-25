import { SET_DATA } from "../actionTypes";

const initialState={
    content:{}
}

const petReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case SET_DATA:
            return{

            }
    default:return state;
    }
}