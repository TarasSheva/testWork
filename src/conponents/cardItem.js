import React from 'react';
import './cardItem.css';

const CardItem = ({src, liked, id, text, url}) => {

    let classNameLike = 'far fa-heart';

    if (url.length === 0) {
        classNameLike = 'fas fa-heart';
    }

    return (
        <div>
            <div className="card_item-wrap">
                <img src={src} alt="" className="card_item-img"/>
            </div>
            <div className="card_item-info">
                <div className="card_item-indif">
                    <p>#{id}</p>
                    <i
                        className={classNameLike}
                        onClick={liked}
                    > </i>
                </div>
                <h5 className="card_item-text">Author: {text}</h5>
            </div>
        </div>
    )
}
export default CardItem;