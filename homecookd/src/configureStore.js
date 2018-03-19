import { createStore, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(persistedReducer, {}, composeEnchancers())
let persistor = persistStore(store)

export { store, persistor};

// const store = createStore(
//     allReducers,
//     {
//         logged: false
//     },
//     __ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
