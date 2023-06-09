import React from 'react';
import ReactDOM from 'react-dom/client';
import { JournalApp } from './JournalApp';
import './styles.css';
import { Provider } from 'react-redux';
import { store } from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <JournalApp />
    </Provider> 
);

