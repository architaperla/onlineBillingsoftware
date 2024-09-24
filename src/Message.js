import React, { Component, useEffect } from "react";

class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank You '
        })

    }

    
    render() {
        return (
            <div>
                <h1> Hello {this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>SubScribe</button>
            </div>


        )

    }


}

function useEffectFunction(){
    const url =""
    useEffect(
        fetch(url).then(response => 
            console.log(response)
            ).catch(e=>
                {
                    console.log('e',e)
                })
    )


}

export default Message;