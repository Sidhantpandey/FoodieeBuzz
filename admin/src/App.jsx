import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import {Routes,Route} from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // we have defined the url in two places now we are defining it in one place
  const url="http://localhost:4000"
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          {/* we have passed url through props */}
          <Route path="/add" element={<Add url={url} />}/>
          <Route path="/list" element={<List url={url} />}/>
          <Route path="/orders" element={<Orders url={url} />}/>
        </Routes>
      </div>
    </div>
  )
}


export default App