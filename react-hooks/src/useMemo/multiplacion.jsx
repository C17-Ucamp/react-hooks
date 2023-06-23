import { useMemo } from "react"

function Pasarmultiplar(a,b){
    return a*b
}

function Multiplicar(){
    const change = true
    
    const memorizarMultplicacion = useMemo(()=> Pasarmultiplar(5,9),[change])

    return(
        <h1>Esto es una multiplacion usando useMemo: {memorizarMultplicacion}</h1>
    )
}

export default Multiplicar