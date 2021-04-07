import React from 'react'
import { NavLink } from 'react-router-dom'

export function ContactPreview({ contact }) {
    return (
        <NavLink className="contact-preview" to={'/contact/'+contact._id}>
            <img src={`https://robohash.org/${contact._id}`} />
            <h4>{contact.name}</h4>
        </NavLink>
    )
}
