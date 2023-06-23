import { useReducer } from "react";

const estadoInicial = {count: 0}

function Reducir(state, action){
    switch(action.type){
        case 'incrementar':
        return {count: state.count + 1};
        case 'decrementar':
        return {count: state.count -1};
        case 'reset':
        return estadoInicial
    }
}

function Incrementar(){

    const [state, setState] = useReducer(Reducir, estadoInicial)
    
 return(
    <>
    Contador de useReducer = {state.count}
    <button onClick={()=> setState({type:'incrementar'})}>+</button>
    <button onClick={()=> setState({type:'decrementar'})}>-</button>
    <button onClick={()=> setState({type:'reset'})}>Reset</button>
    </>
 )

}

export default Incrementar