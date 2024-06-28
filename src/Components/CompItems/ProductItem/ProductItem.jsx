import React from 'react'
import "./productItem.scss"

const ProductItem = ({image, title}) => {
  return (
    <div className='product-item'>
        <img src={image} alt="product-image" />

        <div className="title-box">
            <h1>{title}</h1>
        </div>
    </div>
  )
}

export default ProductItem