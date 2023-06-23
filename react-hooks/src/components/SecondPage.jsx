import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { items } from './datos'
import Incrementar from '../useReducer/sumar'

const SecondPage = () => {
  return (
    <div>
        <nav>
            <Link to={'/'}>Inicio</Link>
            <Link to={'/about'}>About</Link>
        </nav>
      <h1>About</h1>

    {items.map(item =>
    <div>
     <Link to={`contacts/${item.id}`}>{item.nombre}</Link>
    </div>
    )}
    
    <Outlet />

    <div>
      <Incrementar />
    </div>
    
    </div>
  )
}

export default SecondPage
