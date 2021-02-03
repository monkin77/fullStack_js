import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Redux imports (create global state and functions)
import rootReducer from './store/reducers';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

const {store, persistor} = configureStore();

// const store = createStore(rootReducer, applyMiddleware(thunk));  // this was when we used a storage from memory instead of browser

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
