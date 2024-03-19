import Home from './Pages/Home'
import './assets/App.css'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import Events from './Pages/AllEvents'
import Adevents from './Pages/Adevents'
import Allbookings from './Pages/EventBookingForm'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error404 from './Pages/Error404'
import EventBookingForm from './Pages/EventBookingForm'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='allevents' element={<Events />}></Route>
          <Route path='addevents' element={<Adevents />}></Route>
          <Route path='allbookings' element={<Allbookings />}></Route>
          <Route path='mybookings' element={<EventBookingForm />}></Route>
          <Route path='*' element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
