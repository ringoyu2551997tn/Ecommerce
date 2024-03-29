import React from 'react';
import ReactDOM from 'react-dom/client';
import { store,persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import "react-toastify/dist/ReactToastify.css";
import {app} from "./filebase.config";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} app={app}>
        <PersistGate loading={"loading"} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
);

