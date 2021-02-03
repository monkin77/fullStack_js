import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';    // Make API calls and then dispatch the results of those

import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const persistConfig = {
    key: 'root',
    storage,    // storage: storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk));
    let persistor = persistStore(store);
    return{
        store, 
        persistor
    }
}