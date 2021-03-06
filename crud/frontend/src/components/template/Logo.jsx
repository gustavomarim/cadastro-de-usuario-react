import './Logo.css'
import logo from '../../assets/imgs/DeveloperDgLogo.png'
import React from 'react'
import { Link } from 'react-router-dom'

const fn = props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo" />
        </Link>
    </aside>

export default fn