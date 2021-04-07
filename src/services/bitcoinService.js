import axios from 'axios'
import { storageService } from './storageService.js'
import { makeId } from './utilService.js'

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getTransactions
}

const KEY_MARKET_PRICE = 'market-price'
const KEY_TRANSACTIONS = 'transactions'

var gMarketPrice = _loadMarketPrice();
var gTransactions = _loadTransactions();

function _loadMarketPrice() {
    var marketPrice = storageService.load(KEY_MARKET_PRICE)
    if (!marketPrice) {
        return axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
            .then(res => {
                marketPrice = res.data
                storageService.store(KEY_MARKET_PRICE, marketPrice)
                return marketPrice;
            });
    }
    return marketPrice
}
function _loadTransactions() {
    var transctions = storageService.load(KEY_TRANSACTIONS)
    if (!transctions) {
        return axios.get('https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&format=json&cors=true')
            .then(res => {
                transctions = res.data
                storageService.store(KEY_TRANSACTIONS, transctions)
                return transctions;
            });
    }
    return transctions
}
getRate()
function getRate(coins) {
    return axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
        .then(res => res.data)
}

function getMarketPrice() {
    return Promise.resolve(gMarketPrice)
}

function getTransactions() {
    return Promise.resolve(gTransactions)

}