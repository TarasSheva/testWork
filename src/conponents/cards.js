import React, {Component} from 'react';
import CardItem from "./cardItem";
import './cards.css';

export default class Cards extends Component {
    
    render() {


        const postList = this.props.posts.map((item) =>
            <li className="card_item" key={item.id} onClick={this.onLike}>
                <CardItem
                    src={item.download_url}
                    id={item.id}
                    text={item.author}
                />
            </li>
        )


        return (
            <div className="cards">
                <nav className="navbar">
                    <div className="navbar_container">
                        <div
                            className="navbar_home"
                            onClick={this.props.homeLiked
                                ? null
                                : this.props.homeLiked}>
                            Home
                        </div>
                        <div
                            className="navbar_likes"
                            onClick={this.props.homeLiked
                                ? null
                                : this.props.homeLiked}>
                            Likes
                        </div>
                    </div>
                </nav>
                <div className="cards_container">
                    <div className="cards_wrapper">
                        <ul className="cards_items">
                            {this.props.homeLiked
                                ? postList
                                : null}
                        </ul>
                    </div>
                </div>
            </div>
        )

    }
}
