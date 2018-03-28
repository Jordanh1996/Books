import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'normalize.css';
import './styles/styles.scss';

import Dashboard from './pages/dashboard';
import configureStore from './store/configureStore';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <MuiThemeProvider>
            <Dashboard />
        </MuiThemeProvider>
    </Provider>
);


ReactDOM.render(jsx, document.getElementById("app"));