import React, {Component} from 'react';
import CardItem from "./cardItem";
import './cards.css';

export default class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showAll: true,
            showLiked: false
        }
        this.showPost = this.showPost.bind(this);
    }
    componentDidMount() {
        fetch("https://picsum.photos/v2/list")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        data: result
                    });
                },
                (error) => {
                    console.log(error)
                }
            )
    }
    showPost() {
        this.setState(({showLiked, showAll}) => ({
            showLiked: !showLiked,
            showAll: !showAll
        }))
    }


    render() {
        const {data, showAll, showLiked} = this.state;
        const postList = data.map((item)=><CardItem src={item.download_url} id={item.id} key={item.id} text={item.author}/>);
        const postLikedList = null;


        return (
            <div className="cards">
                <nav className="navbar">
                    <div className="navbar_container">
                        <div
                            className="navbar_home"
                            onClick={showAll
                                ? null
                                : this.showPost}>
                            Home
                        </div>
                        <div
                            className="navbar_likes"
                            onClick={showLiked
                                ? null
                                : this.showPost}>
                            Likes
                        </div>
                    </div>
                </nav>
                <div className="cards_container">
                    <div className="cards_wrapper">
                        <ul className="cards_items">
                            {this.state.showAll
                                ? postList
                                : postLikedList}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}