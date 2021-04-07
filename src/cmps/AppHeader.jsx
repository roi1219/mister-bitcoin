import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assest/img/logo.webp'

export function AppHeader() {
    return (
        <header>
            <img className="logo" src={logo}/>
            <nav>
                <NavLink exact activeClassName="active-nav" to='/'>Home</NavLink>
                <NavLink activeClassName="active-nav" to='/contact'>Contacts</NavLink>
                <NavLink activeClassName="active-nav" to='/statistic'>Statistics</NavLink>
            </nav>
        </header>
    )
}
