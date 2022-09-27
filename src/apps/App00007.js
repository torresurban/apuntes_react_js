//import AjaxHooks from '../00003peticionesAsincAjax/AjaxHooks'
import { Provider } from 'react-redux'
import store from '../00007redux/store/index.store'
import Contador from '../00007redux/components/Contador'
import ContadorClase from '../00007redux/components/ContadorClase'
import ShoppingCart from '../00007redux/components/ShoppingCart'
import CrudApi from '../00007redux/components/CrudApi'
const App = () => {
    return(
        <Provider store={store}>
            <div style={{textAlign:'center'}}>
                <h1>Redux</h1>
                <hr />
                <Contador />
                <hr />
                <ContadorClase />
                <hr />
                <ShoppingCart />
                <hr />
                <CrudApi />
            </div>
        </Provider>
    )
}

export default App