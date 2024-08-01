import { Routes, Route } from "react-router-dom"
import Home from './pages/Home.jsx'
import CreateRecipe from './pages/CreateRecipe.jsx'
import DeleteRecipe from './pages/DeleteRecipe.jsx'
import UpdateRecipe from './pages/UpdateRecipe.jsx'
import Nav from './components/Nav'

function App() {
  return (
    <div className="bg-gray-50 h-screen w-screen flex flex-col items-center w-full">
    <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/recipes/delete/:id' element={<DeleteRecipe />}/>
        <Route path='/recipes/edit/:id' element={<UpdateRecipe />}/>
        <Route path='/create' element={<CreateRecipe />}/>
      </Routes>
    </div>
  )
}

export default App
