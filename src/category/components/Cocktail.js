import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Cocktail({ image, name, id, cost, url, category, des }) {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <p className='model-cost'>{cost}</p>
        <h3>{name}</h3>
        <h4>Thể loại: {category}</h4>
        <h4>Giá: {cost}</h4>
        <p><b>Mô tả</b>: {des}</p>
        <a href={url} target='_blank'>Details</a>
        {/* <Link to={`/category/cocktail/${id}`} className='btn btn-primary btn-details'>
          details
        </Link> */}
      </div>
    </article>
  )
}
