import React, { Component } from 'react'
import Main from '../template/Main'

// Componente criado em classe por possuir estado
const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar, Excluir'
}

// DESAFIO - Componentizar o Incluir, Listar... (row 8)
export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps} >
                Cadastro de Usuário
            </Main>
        )
    }
}