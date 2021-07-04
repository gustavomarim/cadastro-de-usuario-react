import './Nav.css'
import React from 'react'

const fn = props =>
    <aside className="menu-area">
        <nav className="menu">

            {/* Refatorar em casa! */}
            <a href="/">
                <i className="fa fa-home"></i> Início
            </a>

            <a href to="#/users">
                <i className="fa fa-users"></i> Usuários
            </a>
            
        </nav>
    </aside>

export default fn