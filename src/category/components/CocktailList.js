import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import data from '../pages/data'

export default function CocktailList() {
  const { loading } = useGlobalContext()
  if (loading) {
    return <Loading/>
  }
  return (
    <section className='section'>
      <h2 className='section-title'>Một số thể loại mô hình 3d</h2>
      {/* <h3 className='section-category'>Category 3d Model</h3> */}
      <div className='jump-text'>
        <span style={{"--ii":"1"}}>c</span>
        <span style={{"--ii":"2"}}>a</span>
        <span style={{"--ii":"3"}}>t</span>
        <span style={{"--ii":"4"}}>e</span>
        <span style={{"--ii":"5"}}>g</span>
        <span style={{"--ii":"6"}}>o</span>
        <span style={{"--ii":"7"}}>r</span>
        <span style={{"--ii":"8"}}>i</span>
        <span style={{"--ii":"9"}}>e</span>
        <span style={{"--ii":"10"}}>s</span>
      </div>
      <div className='cocktails-center'>
        {data.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}
