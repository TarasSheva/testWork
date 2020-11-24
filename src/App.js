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
            <div className="App">
                <Cards  posts={data} />
                <Footer/>
            </div>
        );
    }
}


