import React from 'react'
import "./product.scss"
import ProductItem from '../CompItems/ProductItem/ProductItem'
import { Assets } from '../Assets/Assets'

const Product = () => {
  return (
    <div className='product'>
        <div className="container">
            <div className="product-title">
                <h1>Каталог товаров</h1>
            </div>
            <div className="product-items">
                <ProductItem image={Assets.product_catalog1} title={"бандажи"}/>
                <ProductItem image={Assets.product_catalog2} title={"бюстгалтеры"}/>
                <ProductItem image={Assets.product_catalog3} title={"трусики"}/>
                <ProductItem image={Assets.product_catalog4} title={"другое"}/>
            </div>
        </div>
    </div>
  )
}

export default Product