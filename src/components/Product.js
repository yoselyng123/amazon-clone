import React, { useRef } from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Product({ name, company, rating, reviews, price, imgSrc, bigImg }) {
    const [click, setClick] = useState(false);
    const productRef = useRef();

    const info = () => {
        console.log(productRef.current.getBoundingClientRect());
    };

    return (
        <div className='product' ref={productRef} onClick={info}>
            <div className='product__img__wrapper'>
                <div
                    className='product__img'
                    style={{
                        display: 'flex',
                        backgroundImage: `url(${imgSrc})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: `${bigImg ? '70%' : '100%'}`,
                        height: '10rem',
                    }}
                >
                    <FontAwesomeIcon
                        icon={faHeart}
                        className={`product__heart ${
                            click && 'product__heart--clicked'
                        }`}
                        onClick={() => {
                            setClick(!click);
                        }}
                    />
                </div>
            </div>
            <div className='product__info'>
                <h4>{name}</h4>
                <p className='product__company'>{company}</p>
                <div className='product__rating'>
                    <p>
                        ⭐⭐⭐⭐⭐<span> {rating} </span>({reviews})
                    </p>
                </div>
                <p className='product__price'>${price}</p>
            </div>
        </div>
    );
}

export default Product;
