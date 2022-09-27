import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../100001ejercicio-login/pages/Login'
import Menu from '../100001ejercicio-login/pages/Menu'

const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                
                <Route exact path='/' component= {Login} />
                <Route exact path='/menu' component= {Menu} />

            </Switch>
        </BrowserRouter>
    )
}

export default App