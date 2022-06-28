import React from 'react'
import './Product.css'


function Product({ title, image, price, rating, id }) {
    return (
        <div className='product'>
            <div key={id}  className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐️</p>
                    ))}

                </div>
            </div>

            <img
                src={image}
                alt='product'
            />

            <button>Add to Cart</button>
        </div>
    )
}

export default Product