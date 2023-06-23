import React, { useMemo } from 'react'
import {useParams} from 'react-router-dom'
import { getContact } from './datos'

const  Hijo = () => {
    const params = useParams()
   
    const contactos = useMemo(() => getContact(params.contactid), [params.contactid])

    if(!contactos){
        throw new Error("El contacto no se encuentra")
    }

  return (
    <div>
      <h1>{contactos.nombre}</h1>
      <h1>{contactos.telefono}</h1>
    </div>
  )
}

export default Hijo
