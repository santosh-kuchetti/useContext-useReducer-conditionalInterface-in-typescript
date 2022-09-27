import { useReducer } from "react";
import { convertTypeAcquisitionFromJson } from "typescript";

const initialState= {
    counter:100,
}
type Actions = {type:'increment';payload:number} | {type:'decrement';payload:number};

 function reducerFunction(state: typeof initialState, action: Actions) {
    switch(action.type){
        case 'increment':
            return{
                ...state,
                counter:state.counter + action.payload,
            }
        case 'decrement':
            return {
              ...state,
              counter: state.counter - action.payload,
            };
    }
 }

 function FinalReducer(){
    const[state,dispatch] = useReducer(reducerFunction,initialState);
    return(
        <div>
            <div>{state.counter}</div>
            <div>
                <button onClick={()=>dispatch({
                    type:'increment',
                    payload:50
                })}>
                    'Increment'
                </button>
            </div>
        </div>
    )
 }

 export default FinalReducer;