import React, { Component } from 'react'

export class ContactFilter extends Component {
    state = {
        name: '',
        phone: ''
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter({ ...this.state })
        })
    }
    render() {
        return (
            <div className="contact-filter">
                <form onSubmit={(ev) => ev.preventDefault()}>
                    <h3>Search:</h3>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" name="phone" id="phone" value={this.state.phone} onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}
