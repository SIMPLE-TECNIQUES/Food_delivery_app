import React from 'react'
import Navbar from '/src/Components/Navbar'
import CategoryMenu from '/src/Components/CategoryMenu'
import FoodItems from '/src/Components/FoodItems'
import Cart from '/src/Components/Cart'
export default function Home() {
  return (
    <div>
     <Navbar/>
     <CategoryMenu/>
     <FoodItems/>
     <Cart/>
    </div>
  )
}
