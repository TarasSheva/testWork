import React from 'react';
import './cardItem.css';

const CardItem = (props) => {
    return (
        <div>
            <li className="card_item">
                <div className="card_item-wrap">
                    <img src={props.src} alt="" className="card_item-img"/>
                </div>
                <div className="card_item-info">
                    <div className="card_item-indif">
                        <p>#{props.id}</p>
                        <i className="far fa-heart"></i>
                    </div>
                    <h5 className="card_item-text">Author: {props.text}</h5>
                </div>
            </li>
        </div>
    )
}

export default CardItem;