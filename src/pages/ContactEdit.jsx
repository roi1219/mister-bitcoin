import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { contactService } from '../services/contactService';

export default class ContactEdit extends Component {
    state = {
        contact: null
    }
    async componentDidMount() {
        const { id } = this.props.match.params;
        const contact = (id) ? await contactService.getContactById(id) : contactService.getEmptyContact();
        console.log('contact:', contact)
        this.setState({ contact });
    }

    handleChange = ({ target }) => {
        const field = target.name;
        const value = (target.type === 'number') ? +target.value : target.value;
        this.setState((prevState) => ({ contact: { ...prevState.contact, [field]: value } }))
    }

    saveContact = async (ev) => {
        ev.preventDefault();
        const contact=await contactService.saveContact({ ...this.state.contact });
        console.log('contact:', contact)
        this.props.history.push('/contact');
    }

    render() {
        if (!this.state.contact) return <div>Loading...</div>
        const { name, email, phone } = this.state.contact;
        return (
            <div className="contact-edit">
                <form onSubmit={this.saveContact}>
                    <label htmlFor="name">Name:</label>
                    <input placeholder="Full name goes here" type="text" name="name" id="name" value={name} onChange={this.handleChange} />
                    <label htmlFor="email">Email:</label>
                    <input placeholder="Email goes here" type="email" name="email" id="email" value={email} onChange={this.handleChange} />
                    <label htmlFor="phone">Phone:</label>
                    <input placeholder="Phone number goes here" type="tel" name="phone" id="phone" value={phone} onChange={this.handleChange} />
                    <button>Save Contact</button>
                </form>
                <NavLink to='/contact'>Back</NavLink>
            </div>
        )
    }
}
