import { useState } from 'react'
// import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import { Provider } from 'react-redux'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import NavBar from './Component/NavBar'
// import store from './store/store'

function App() {
  return (
   <>
   <div className='app'>
   {/* <Provider store={store}> */}
    <BrowserRouter>
     <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Cart" element={<Cart/>} />
         
        </Routes>
     </BrowserRouter>
    {/* </Provider> */}
   </div>
   </>
  )
}

export default App
