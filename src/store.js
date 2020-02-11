import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import InitialState from './datastore';

const store = createStore(rootReducer, InitialState);

export default store;
