import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

// Componente criado em classe por possuir estado
const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar, Excluir'
}

// DESAFIO -  Estado inicial (Colocar dentro de constante -> utilizar import/export)
const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}

// DESAFIO - Componentizar o Incluir, Listar... (row 8)
export default class UserCrud extends Component {

    state = { ...initialState }

    // Limpa o form.
    clear() {
        this.setState({ user: initialState.user })
    }

    // Inserir/Alterar user existente
    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    render() {
        return (
            <Main {...headerProps} >
                Cadastro de Usuário
            </Main>
        )
    }
}