import {DISPLAY_DATA} from './constant';

const initialState={
   livestore:[]
}

const livedisplayReducer = (state=initialState , action ={}) =>{
    switch(action.type){
        case DISPLAY_DATA:{
            return {...state, livestore : action.data}
        }
        
     
        default:
            return state;
    }
}

export default livedisplayReducer