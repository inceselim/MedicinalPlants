import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import App from "./App"

export default function Main() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};
