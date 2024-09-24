import React, { Component, useEffect } from "react";
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postsarray: []

        }
    }

    // componentDidMount() {

    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(response => {
    //             //  console.log(respose.data)
    //             this.setState({
    //                 postsarray: response.data
    //             })
    //             console.log(this.state.postsarray)

    //         }).catch(er =>
    //             console.log(er)

    //         )

    // }

    changeMessage() {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                //   console.log(response.data)
                this.setState({
                    postsarray: response.data}
                , () => { console.log(this.state.postsarray)})
               

            }).catch(er =>
                console.log(er)

            )

    }


    render() {
        const { p } = this.state.postsarray
        return (
            <div>
                <p>List of posts</p>
                <button onClick={() => this.changeMessage()}>Increment</button>
                
            </div>

        )

    }


}

function useEffectFunction() {
    const url = "https://jsonplaceholder.typicode.com/posts"
    useEffect(
        fetch(url).then(response => {

            console.log(response)
            this.setState({
                posts: response.data
            })
        }
        ).catch(e => {
            console.log('e', e)
        })
    )


}

export default PostList;