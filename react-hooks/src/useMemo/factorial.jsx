import { useMemo, useState } from "react";


const Factorial = () =>{

  const [number, setNumber] = useState(1)


    const factorial = (number) => {
        let result = 1;
        for(let i = 1; i <= number; i++){
            result *= i; 
        }
        return result
    }

    const memorizarFactorial = useMemo(() => factorial(number), [number])

    return(
        <div>
            El numero del factorial de {number} es {memorizarFactorial} 
            <button onClick={()=> setNumber(number + 1)}>Incrementar</button>
        </div>
    )
}

export default Factorial