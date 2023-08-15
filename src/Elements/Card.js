import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from 'react-icons/bs'

function Card({ Img, title, star, reviews, newPrice, prevPrice }) {
    return (
        <section className='card'>
            <img src={Img}
                alt={title}
                className='card-img' />
            <div className='card-details'>
                <h3 className='card-title'>{title}</h3>
                <section className='car-reviews'>
                   {star}  {star} {star} {star}
                    <span className='total-reviews'>{reviews}</span>
                </section>
                <section className='card-price'>
                    <div className='price'>
                        <del>{prevPrice}</del>      {newPrice}
                    </div>

                    <div className='bag'>
                        <BsFillBagHeartFill className='bag-icon' />
                    </div>


                </section>
            </div>
        </section>
    );
}

export default Card