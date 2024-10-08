import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'

import './index.css'
import Root from './pages/rootElement/root.jsx'
import ErrorPage from './pages/errorElement/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <App/>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
 <div className='lg:max-w-screen-xl lg:mx-auto lg:px-8 sm:px-2'>
   <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
 </div>
)