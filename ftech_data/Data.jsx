import React from 'react'

const Data = ({title, price, image, rating}) => {
  return (
    <div className='card'>
      <h5> {title}</h5>
      <img src={image} alt="" />
      <p>{price}</p>
      <p>{rating.rate}</p>
    </div>
  ) 
}

export default Data
