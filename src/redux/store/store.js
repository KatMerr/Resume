import { createStore } from 'redux'
import reducers from '../reducers/_reducers'

const store = createStore(reducers);

export default store;


