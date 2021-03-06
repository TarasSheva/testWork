import React, {Component} from 'react';
import CardItem from "./cardItem";
import './cards.css';

export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAll: true,
            showLiked: false
        }
        this.showPost = this.showPost.bind(this);
    }

    showPost() {
        this.setState(({showLiked, showAll}) => ({
            showLiked: !showLiked,
            showAll: !showAll
        }))
    }

    render() {
        const {showAll, showLiked} = this.state;

        const postList = this.props.posts.map((item) =>
            <li className="card_item" key={item.id}>
                <CardItem liked={() => this.props.onToggleLike(item.id)}
                          src={item.download_url}
                          id={item.id}
                          text={item.author}
                          url={item.url}
                />
            </li>
        )
        // const sss = <h1>You didn't like any post</h1>;
        const postLikeList = this.props.postLikes.map((item) =>
            <li className="card_item" key={item.id}>
                <CardItem liked={() => this.props.onToggleLike(item.id)}
                          src={item.download_url}
                          id={item.id}
                          text={item.author}
                          url={item.url}
                />
            </li>
        )

        return (
            <div className="cards">
                <nav className="navbar">
                    <div className="navbar_container">
                        <div
                            className="navbar_home"
                            onClick={showAll ? null : this.showPost}
                        >
                            Home ({this.props.all})
                        </div>
                        <div
                            className="navbar_likes"
                            onClick={showLiked ? null : this.showPost}
                        >
                            Likes ({this.props.liked})
                        </div>
                    </div>
                </nav>
                <div className="cards_container">
                    <div className="cards_wrapper">
                        <ul className="cards_items">
                            {this.state.showAll
                                ? postList
                                : postLikeList}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
