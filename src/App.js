import React, {Component} from 'react'
import './App.css';
import Cards from "./conponents/cards";
import Footer from "./conponents/footer";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.onToggleLike = this.onToggleLike.bind(this)
    }

    componentDidMount() {
        fetch("https://picsum.photos/v2/list")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState(({data}) => ({
                        data: result
                    }));
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    onToggleLike(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index]

            const newItem = {...old, url: ''}

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }


    render() {
        const {data} = this.state;
        const liked = data.filter(item => item.url.length === 0).length;
        const allPosts = data.length;
        const postLikes = data.filter(item => item.url.length === 0);

        return (
            <div className="App">
                <Cards liked={liked} all={allPosts} onToggleLike={this.onToggleLike} posts={data} postLikes={postLikes}/>
                <Footer/>
            </div>
        );
    }
}


