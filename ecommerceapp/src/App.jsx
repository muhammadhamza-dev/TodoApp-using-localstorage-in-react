import {BrowserRouter as  Router, Routes, Route } from "react-router-dom"
import Home from "./HomePage/Home" 
import ProductDetails from "./Products/ProductDetails"

function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products/:id" element={<ProductDetails/>}/>
        </Routes>
     </Router>
    </>
  )
}

export default App
