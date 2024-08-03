
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import AddPage from './Pages/AddPage'
import UpdatePage from './Pages/UpdatePage'

function App() {

  return (
    <>
      <BrowserRouter>

         <Routes>
             <Route path="/" element={<HomePage/>}/>
             <Route path="/AddPage" element={<AddPage/>}/>
             <Route path="/UpdatePage" element={<UpdatePage/>}/>           
         </Routes>
      
      </BrowserRouter>


    
    </>
  )
}

export default App
