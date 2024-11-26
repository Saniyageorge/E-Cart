import './App.css'
import Footer from './Components/Footer'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import View from './Pages/View'
import Wishlist from './Pages/Wishlist'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/wishlist' element={<Wishlist/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/view/:id' element={<View/>}/>
{/* requesting an invalid route , redirect to home */}
<Route path='/*' element={<Navigate to={'/'}/>}/>
</Routes>
    <Footer/>
    </>
  )
}

export default App
