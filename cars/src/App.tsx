import {CarForm, CarList, CarSearch, CarValue} from './components'

import 'bulma/css/bulma.min.css';
import './styles.css';

const App = () => {
    return <div className='container is-fluid'>
        <CarForm />
        <hr />
        <CarSearch />
        <hr />
        <CarList />
        <hr />
        <CarValue />
    </div>
}

export default App;