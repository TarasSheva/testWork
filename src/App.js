import React, {Component} from 'react'
import './App.css';
import Cards from "./conponents/cards";
import Footer from "./conponents/footer";

export default class App extends Component {
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
        const {data, like} = this.state;


        return (
            <div className="App">
                <Cards homeLiked={this.showPost} posts={data} />
                <Footer/>
            </div>
        );
    }
}


