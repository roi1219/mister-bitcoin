import React from 'react'
import { ContactPreview } from './ContactPreview.jsx'

export function ContactList({ contacts }) {
    return (
        <div className="contact-list">
            {contacts.map(contact => <ContactPreview key={contact._id} contact={contact} />)}
        </div>
    )
}
