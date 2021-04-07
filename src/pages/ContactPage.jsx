import React, { Component } from 'react'
import { ContactList } from '../cmps/ContactList.jsx'
import { contactService } from '../services/contactService.js'
import { ContactDetails } from './ContactDetails.jsx'
import { ContactFilter } from '../cmps/ContactFilter.jsx'
import { NavLink } from 'react-router-dom'

export class ContactPage extends Component {
    state = {
        contacts: null,
        selectedContactId: null,
        filterBy: null
    }
    componentDidMount() {
        this.loadContacts();
    }
    onChangeFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts)
    }
    async loadContacts() {
        const contacts = await contactService.getContacts(this.state.filterBy)
        this.setState({ contacts });
    }
    render() {
        if (!this.state.contacts) return <div>Loading...</div>
        return (
            <div>
                <h1>Contacts</h1>
                <ContactFilter onChangeFilter={this.onChangeFilter} />
                <NavLink to='/contact/edit'>Add Contact</NavLink>
                <ContactList contacts={[...this.state.contacts]} />
            </div>
        )
    }

}
