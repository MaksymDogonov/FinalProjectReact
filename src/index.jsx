import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';
import {store} from "./store/store.js";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
})

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <App />
                </Provider>
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
);
