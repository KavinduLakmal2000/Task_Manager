import './App.css'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"

import Home from "./pages/Home"
import TaskList from "./pages/TaskList"
import AddTask from "./pages/AddTask"

import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <dev className="h-screen flex flex-col"> 
      <Navbar />

       <main className="flex-1 overflow-hidden">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/add" element={<AddTask />} />
      </Routes>
      </main>

      <Footer />
    
    </dev>
  )
}

export default App 
