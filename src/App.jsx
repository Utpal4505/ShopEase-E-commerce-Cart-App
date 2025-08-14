import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Test from './hooks/test'

function App() {

  return (
    <>
   <Header />
   <Outlet />
   <Footer />
    </>
  )
}

export default App
