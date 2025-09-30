import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Cart from './pages/Cart'

function App() {
  const[cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.id === product.id)
      if(existing){
        return prevCart.map(item =>
          item.id === product.id
          ? {...item, quantity: item.quantity + 1}
          : item
        )
      }else {
        return [...prevCart, {...product, quantity: 1}]
      }
    })
  }

  return (
    <Router>
      <div className="app">
        <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
export default App
