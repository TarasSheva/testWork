import React, {Component} from 'react';
import './cardItem.css';

export default class CardItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            like: false
        };
        this.onLike = this.onLike.bind(this);
    }

    onLike() {
        this.setState(({like}) =>({
            like: !like
        }))
        console.log(this.props)

    }

    render() {
        let classNameLike = 'far fa-heart';

        if (this.state.like) {
            classNameLike = 'fas fa-heart';
        }


        return (
            <div>
                <li className="card_item">
                    <div className="card_item-wrap">
                        <img src={this.props.src} alt="" className="card_item-img"/>
                    </div>
                    <div className="card_item-info">
                        <div className="card_item-indif">
                            <p>#{this.props.id}</p>
                            <i
                                className={classNameLike}
                                onClick={this.onLike}
                            > </i>
                        </div>
                        <h5 className="card_item-text">Author: {this.props.text}</h5>
                    </div>
                </li>
            </div>
        )
    }
}