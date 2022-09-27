import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../100003crud_node_react_jsonServer/layout/Navbar'
import Home from '../100003crud_node_react_jsonServer/pages/Home'
import About from '../100003crud_node_react_jsonServer/pages/About'
import Contact from '../100003crud_node_react_jsonServer/pages/Contact'
import AddUser from '../100003crud_node_react_jsonServer/users/AddUser'
import EditUser from '../100003crud_node_react_jsonServer/users/EditUser'
import User from '../100003crud_node_react_jsonServer/users/User'
import NotFound from '../100003crud_node_react_jsonServer/pages/NotFound'




const App = () => {
    return(
        <Router>
            <div>
                <Navbar />
            </div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/users/edit/:id' component={EditUser}/>
                <Route exact path='/users/add' component={AddUser}/>
                <Route exact path='/users/:id' component={User}/>
                <Route exact path='*' component={NotFound} />
            </Switch>
            
        </Router>
    )
}

export default App