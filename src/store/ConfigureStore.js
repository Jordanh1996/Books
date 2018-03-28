import {createStore, compose} from 'redux';

import BooksReducer from '../reducers/BooksReducer';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        BooksReducer,
        composeEnchancers()
    );
    return store;
};

