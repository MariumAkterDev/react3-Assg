import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import NotFound from './Components/NotFound/NotFound'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Home from './Pages/Home'

function App() {

 const myPath = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/'         element  ={<Home     />} />
      <Route path='/about'    element  ={<About    />} />
      <Route path='/blog'     element  ={<Blog     />} />
      <Route path='/contact'  element  ={<Contact  />} />
      <Route path='*'         element  ={<NotFound />} />
    </Route>
  )
 ) 

 
  return (
    <>
     <Navbar/>
     <RouterProvider router={myPath} />
     <Footer/>
    </>
  )
}

export default App
