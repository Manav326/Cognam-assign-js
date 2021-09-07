import * as actions from "../action/actionTypes";

const initialData = {
    users:[]
}
let id=0;
export function reducer(state=initialData, action){
    if (action.type === actions.SIGN_UP) {
        const {id, user}=action.payload;
        return { ...state, users:[...state.users,{id:id, user:user}] }
    }
    
    else if(action.type===actions.LOG_IN){
        return[...state,{id:++id, name:"Manav"} ]
    }
    else{
        return state;
    }
}