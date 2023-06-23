import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { Link } from 'react-router-dom'
import Factorial from './useMemo/factorial'
import Multiplicar from './useMemo/multiplacion'

function App() {
  // count: estado actual; setCount: estado que se actualiza
  const [count, setCount] = useState(0)
  const [post, setPost] = useState()

  const getPost  = async() =>{
    const url = "https://jsonplaceholder.typicode.com/posts"
    const response = await axios.get(url)
    setPost(response.data)
  }

  return (
    <>
    <nav>
            <Link to={'/'}>Inicio</Link>
            <Link to={'/about'}>About</Link>
    </nav>

  <Multiplicar />
  
    <div>
      <button onClick={()=> getPost()}>Post</button>
      <button onClick={()=> setPost([])}>Post</button>
    </div>

    {post && post.map((item) => (
      <div>
        {item.title}
      </div>
    ))}

       <h1>El contador es: {count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
        +1
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
        -1
        </button>
        <button onClick={() => setCount(0)}>
        Reset
        </button>
        <Factorial />
    </>
  )
}

export default App
