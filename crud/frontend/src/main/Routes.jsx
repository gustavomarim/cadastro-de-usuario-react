import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrude from '../components/user/UserCrud'

// Mapeamento da URL com os componentes
let fn = props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrude} />
        <Redirect from='*' to='/' /> {/* caso haja rota não mapeada  */}
    </Switch>

export default fn