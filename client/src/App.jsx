import {Route, Routes} from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './Pages/Home'
import ListingsPage from './components/ListingsPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>  
      </Route>
    </Routes>
  )
}

export default App
