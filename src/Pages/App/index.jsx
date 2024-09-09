import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Destination from '../Destination'
import Places from '../Places'
import SignIn from '../SignIn'
import NotFound from '../NotFound'
import NavBar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element: <Home /> },
    { path:'/destination', element: <Destination /> },
    { path:'/places', element: <Places /> },
    { path:'/sign-in', element: <SignIn /> },
    { path:'/*', element: <NotFound /> },

  ])
  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes/>
      <NavBar/>
    </BrowserRouter>
  )
}

export default App
