import React, { Component } from "react";

class Counter extends Component {


    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    increament() {
        this.setState(
            {
                count: this.state.count + 1
            }, () => { console.log(this.state.count) }
        )
    }

    render() {

        return (
            <div>
                <h1> Hello {this.state.count}</h1>
                <button onClick={() => this.increament()}>Increment</button>
            </div>


        )
    }

}
export default Counter;