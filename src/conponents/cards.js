import React, {Component} from 'react';
import CardItem from "./cardItem";
import './cards.css';

export default class Cards extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
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

    render() {
        const {data} = this.state;

        return (
            <div className="cards">
                <div className="cards_container">
                    <div className="cards_wrapper">
                        <ul className="cards_items">
                            {data.map((item)=><CardItem src={item.download_url} id={item.id} key={item.id} text={item.author}/>)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}