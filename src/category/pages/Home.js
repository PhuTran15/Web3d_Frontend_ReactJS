import React, { useEffect } from 'react'
import CocktailList from '../components/CocktailList'
export default function Home() {
  useEffect(() => {
      window.scrollTo(0, 0)
  })
  return (
    <main className='category-container'>
      <CocktailList />
    </main>
  )
}
