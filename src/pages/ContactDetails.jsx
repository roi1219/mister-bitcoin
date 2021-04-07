import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { contactService } from '../services/contactService'

export class ContactDetails extends Component {
    state = {
        contact: null
    }
    async componentDidMount() {
        const contact = await contactService.getContactById(this.props.match.params.id);
        this.setState({ contact })
    }
    render() {
        if (!this.state.contact) return <div>Loading Contact....</div>
        const { contact } = this.state;
        return (
            <div>
                <img src={`https://robohash.org/${contact._id}`} />
                <h5>Name:{contact.name}</h5>
                <h5>Email:{contact.email}</h5>
                <h5>Phone:{contact.phone}</h5>
                <NavLink to='/contact'>Back</NavLink>
                <NavLink to={'/contact/edit/' + contact._id}>Edit</NavLink>
            </div>
        )
    }
}
