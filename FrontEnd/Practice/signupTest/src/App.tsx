import Authpage from './Components/SignUpAndRegistration'
import AllResturants from './Components/AllResturents'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
     
    <Routes>
    <Route path='/' element={ <Authpage/>}/>
    <Route path='/resturants' element={ <AllResturants/>}/>

    </Routes>
    </BrowserRouter>

  )
}

export default App
