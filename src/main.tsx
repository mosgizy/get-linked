import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './routes/root.tsx'
import ErrorPage from './pages/error-page.tsx'
import Contact from './pages/Contact.tsx'
import Register from './pages/Register.tsx'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
