// This is the main file for TauriGrid. It is the entry point for the application and is responsible for rendering the application to the DOM.
// It also contains the redux store, which is used to store the state of the application.
// This means all files beneath main.tsx (app.tsx and so forth) can access and modify the store. 

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/reducers';

// Create the store and pass all reducers to it, as well as the redux devtools extension (if it exists)
const store = createStore(allReducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

// Render the application to the DOM
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
