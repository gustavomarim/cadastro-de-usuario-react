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

    updateField(event) {
        // Sempre que um dado for alterado, a boa prática é clonar e dps setar
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderForm() {
        return (

            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label >Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.value}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..."
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o E-mail..."
                            />
                        </div>{/* form-group */}
                    </div>{/* "col-12 col-md-6" */}

                </div> {/* row */}

                <hr />

                <div className="row">
                    <div className="col-12 d-flex">
                        <button className="bnt btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>{/* col-12 d-flex justify-content-end */}
                </div>{/* row */}

            </div>
        )
    }

    render() {
        return (
            <Main {...headerProps} >
                {this.renderForm()}
            </Main>
        )
    }
}