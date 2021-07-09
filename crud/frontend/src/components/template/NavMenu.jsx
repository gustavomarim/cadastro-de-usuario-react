import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

const fn = props =>
    <nav className="menu">
        <Link to="/">
            <i className="fa fa-home"></i> Início
        </Link>

        <Link to="/users">
            <i className="fa fa-users"></i> Usuários
        </Link>
    </nav>

export default fn