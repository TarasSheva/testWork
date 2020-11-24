import React from 'react';
import './cardItem.css';

const CardItem = (props) => {

    let classNameLike = 'far fa-heart';

        if (props.liked) {
            classNameLike = 'fas fa-heart';
            console.log(props.liked)
        }


    return (
        <div>

                <div className="card_item-wrap">
                    <img src={props.src} alt="" className="card_item-img"/>
                </div>
                <div className="card_item-info">
                    <div className="card_item-indif">
                        <p>#{props.id}</p>
                        <i
                            className={classNameLike}
                            
                        > </i>
                    </div>
                    <h5 className="card_item-text">Author: {props.text}</h5>
                </div>

        </div>
    )
}

export default CardItem;