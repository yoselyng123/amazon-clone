import React, { useRef, useState } from 'react';
import './shop.css';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import WeekendOutlinedIcon from '@material-ui/icons/WeekendOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import WcOutlinedIcon from '@material-ui/icons/WcOutlined';
import MotorcycleOutlinedIcon from '@material-ui/icons/MotorcycleOutlined';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';
import TvOutlinedIcon from '@material-ui/icons/TvOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import WatchOutlinedIcon from '@material-ui/icons/WatchOutlined';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Product from './Product';

function Shop() {
    const products = [
        {
            name: 'Nintendo Switch (2019)',
            company: 'Nintendo',
            rating: 4.8,
            reviews: '21 032',
            price: '290.00',
            img: 'https://m.media-amazon.com/images/I/61-PblYntsL._AC_UY218_.jpg',
        },
        {
            name: 'Sony A7s III',
            company: 'Sony',
            rating: 4.9,
            reviews: '2 865',
            price: '3249.0',
            img: 'https://m.media-amazon.com/images/I/81MpiBUkqsL._AC_UY218_.jpg',
        },
        {
            name: 'Apple iPhone 12 (gold)',
            company: 'Apple',
            rating: 4.5,
            reviews: '8 859',
            price: '749,00',
            img: 'https://m.media-amazon.com/images/I/71LbB2+EOZL._AC_UY218_.jpg',
            bigImg: true,
        },
        {
            name: 'Apple Macbook Pro 13,3',
            company: 'Apple',
            rating: 4.5,
            reviews: '8 859',
            price: '749,00',
            img: 'https://m.media-amazon.com/images/I/71i49M4hv2L._AC_UY218_.jpg',
        },
        {
            name: 'Xbox Series X',
            company: 'Microsoft',
            rating: 4.6,
            reviews: '72 651',
            price: '429,00',
            img: 'https://m.media-amazon.com/images/I/41OH7dLwaJL._AC_UY218_.jpg',
            bigImg: true,
        },
        {
            name: 'Nike Blazer Mid 77',
            company: 'Nike',
            rating: 4.8,
            reviews: '327',
            price: '184,87',
            img: 'https://m.media-amazon.com/images/I/71SeocBGnaL._AC_UL320_.jpg',
        },
        {
            name: 'Adidas Originals Hoodie',
            company: 'Adidas',
            rating: 4.5,
            reviews: '1 414',
            price: '31,06',
            img: 'https://m.media-amazon.com/images/I/81krZiYAZhL._AC_UL320_.jpg',
        },
        {
            name: 'DAYBETTER Led strip lights',
            company: 'DAYBETTER',
            rating: 4.6,
            reviews: '7 234',
            price: '29,99',
            img: 'https://m.media-amazon.com/images/I/81T4qnxZ7nL._AC_UL320_.jpg',
        },
        {
            name: 'Echo dot (3rd gen)',
            company: 'Amazon',
            rating: 4.7,
            reviews: '895 153',
            price: '34,99',
            img: 'https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY218_.jpg',
        },
        {
            name: 'Bose SoundLink Wireless Headphones II',
            company: 'Bose',
            rating: 4.6,
            reviews: '24 703',
            price: '159,00',
            img: 'https://m.media-amazon.com/images/I/71jDdUuRi8L._AC_UY218_.jpg',
            bigImg: true,
        },
        {
            name: 'PlayStation 5 DualSense Wireless Controller',
            company: 'PlayStation',
            rating: 4.6,
            reviews: '20 911',
            price: '68,95',
            img: 'https://m.media-amazon.com/images/I/61rzqjtJo2L._AC_UY218_.jpg',
        },
        {
            name: 'Samsung LC24F396FHNXZA 23.5" FHD Curved LED-Lit FreeSync Monitor',
            company: 'Samsung',
            rating: 4.7,
            reviews: '5 998',
            price: '169,99',
            img: 'https://m.media-amazon.com/images/I/91ubktnbNVL._AC_UY218_.jpg',
        },
    ];

    const listRef = useRef();

    const [slideNumber, setSlideNumber] = useState(0);

    const handleClick = (direction) => {
        if (direction === 'left' && slideNumber > 0) {
            let distance =
                listRef.current.getBoundingClientRect().x - 221.7624969482422;
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${224 + distance}px)`;
        }
        if (direction === 'right' && slideNumber < 6) {
            let distance =
                listRef.current.getBoundingClientRect().x - 221.7624969482422;
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${
                -224 + distance
            }px)`;
        }
    };

    return (
        <div className='shop'>
            <div className='shop__banner'>
                <a href='/'>Browse products</a>
            </div>

            <div className='shop__popularCategories'>
                <h2>Popular categories</h2>

                <div className='popularCategories__list'>
                    <div className='categorie__item'>
                        <ComputerOutlinedIcon />
                    </div>
                    <div className='categorie__item'>
                        <WeekendOutlinedIcon />
                    </div>
                    <div className='categorie__item'>
                        <PhoneIphoneOutlinedIcon />
                    </div>
                    <div className='categorie__item'>
                        <CameraAltOutlinedIcon />
                    </div>
                    <div className='categorie__item'>
                        <WcOutlinedIcon />
                    </div>
                    <div className='categorie__item'>
                        <MotorcycleOutlinedIcon />
                    </div>
                    <div className='categorie__item'>
                        <HeadsetOutlinedIcon />
                    </div>
                    <div className='categorie__item'>
                        <TvOutlinedIcon />
                    </div>
                    <div className='categorie__item'>
                        <SportsEsportsOutlinedIcon />
                    </div>
                    <div className='categorie__item'>
                        <FaceOutlinedIcon />
                    </div>
                    <div className='categorie__item'>
                        <WatchOutlinedIcon />
                    </div>
                </div>
            </div>

            <div className='hotDeals__top'>
                <h2>Hot deals</h2>
                <div className='hotDeals__arrows'>
                    <div
                        className={`arrow
                            ${slideNumber < 1 && 'arrow--disabled'}`}
                    >
                        <ArrowBackIcon
                            onClick={() => {
                                handleClick('left');
                            }}
                        />
                    </div>
                    <div
                        className={`arrow
                            ${slideNumber >= 6 && 'arrow--disabled'}`}
                    >
                        <ArrowForwardIcon
                            onClick={() => {
                                handleClick('right');
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className='shop__hotDeals'>
                <div className='list__wrapper'>
                    <div className='list__products' ref={listRef}>
                        {products.map((product, index) => (
                            <Product
                                key={index}
                                name={product.name}
                                company={product.company}
                                rating={product.rating}
                                reviews={product.reviews}
                                price={product.price}
                                imgSrc={product.img}
                                bigImg={product.bigImg}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
