import { useState } from 'react'
import './App.css'
import ClassBasedComponent from './components/ClassBasedComponent'
import FunctionalBasedComponent from './components/FuntionalBasedComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div><h1>Welcome To React Vite</h1></div>
        <ClassBasedComponent></ClassBasedComponent>
        <FunctionalBasedComponent></FunctionalBasedComponent>
    </>
  )
}

export default App
