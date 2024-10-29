import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Cadastro from './routes/Cadastro.jsx'
import Error from './routes/Error.jsx'
import Resultado from './routes/Resultado.jsx'

const router = createBrowserRouter([
  {
    path:'/', element:<App/>,
    errorElement:<Error/>,

    children: [
      {path: '/', element:<Home/>},
      {path:'/cadastro',element:<Cadastro/>},
      {path:'/Resultado',element:<Resultado/>}
    ]
  }
]) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
