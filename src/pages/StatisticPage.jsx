import React, { Component } from 'react'
import { bitcoinService } from '../services/bitcoinService.js'
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

export class StatisticPage extends Component {
    state = {
        marketPrice: null,
        transactions: null
    }
    async componentDidMount() {
        const marketPrice = await bitcoinService.getMarketPrice();
        const transactions = await bitcoinService.getTransactions();
        this.setState({ marketPrice, transactions })
    }
    get marketPlaceValues() {
        const val = this.state.marketPrice.values.reduce((acc, value) => {
            acc.push(value.y)
            return acc
        }, [])
        return val
    }
    get transactionsValues() {
        const val = this.state.transactions.values.reduce((acc, value) => {
            acc.push(value.y)
            return acc
        }, [])
        return val
    }

    render() {
        if (!this.state.marketPrice) return <div>Loading...</div>
        return (
            <div className="statistic-page">
                <h1>Statistic page</h1>
                <div className="charts">
                    <div>
                        <h2>Market Place</h2>
                        <Sparklines data={this.marketPlaceValues}>
                            <SparklinesLine color="blue" />
                        </Sparklines>
                    </div>
                    <div>
                        <h2>Transactions</h2>
                        <Sparklines data={this.transactionsValues}>
                            <SparklinesLine color="blue" />
                        </Sparklines>
                    </div>
                </div>
            </div>
        )
    }
}
