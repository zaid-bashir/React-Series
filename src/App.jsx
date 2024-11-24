import './App.css'
import ProductComponent from './components/products/index'
function App() {
 
  return (
    <>
      <div style={{ textAlign: 'center', height:"40px"}}>
        <h1>Trending Products</h1>
        <ProductComponent />
      </div>
    </>
  )
}

export default App
