import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './Container';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}>
    <Container/>
    </Provider>
,document.getElementById('root'));
registerServiceWorker();
