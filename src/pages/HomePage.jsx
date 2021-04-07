import React, { Component } from 'react'
import { bitcoinService } from '../services/bitcoinService.js'
import { userService } from '../services/userService.js'

export class HomePage extends Component {
    state = {
        user: null,
        rate: null
    }
    async componentDidMount() {
        const rate = await bitcoinService.getRate()
        const user = userService.getUser();
        this.setState({ user, rate })
    }
    render() {
        return (
            <div>
                {this.state.user && <h1>Hello {this.state.user.name}</h1>}
                {this.state.rate && <h3>Today BitCoin Rate Is: {(1 / this.state.rate).toFixed(2)}$</h3>}
            </div>
        )
    }
}
