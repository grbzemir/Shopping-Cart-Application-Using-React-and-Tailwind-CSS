import './App.css'
import Header from './Components/Header'
import Products from './Components/Products'
import Cart from './Components/Cart'
import { useState } from 'react'

function App() {

  const [cart, setCart] = useState([])

  const emptyCart = () => {
    setCart([])
  }

  return (
    <div className="container mx-auto p-4">
      <Header cart={cart} />
      <Products cart={cart} setCart={setCart} />
      <Cart cart={cart} emptyCart={emptyCart} />
    </div>
  )
}

export default App
