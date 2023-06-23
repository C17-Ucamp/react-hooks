import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SecondPage from './components/SecondPage.jsx'
import Hijo from './components/children.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element:  <App />
  },{
    path: '/about',
    element: <SecondPage />,
    children: [
      {
        path: 'contacts/:contactid',
        element: <Hijo />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
