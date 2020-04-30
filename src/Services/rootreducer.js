import {createStore,combineReducers,applyMiddleware} from 'redux';
import homedisplayReducer from './Home/reducer'

import thunk from 'redux-thunk';

const reducer=combineReducers({homedisplayReducer});

const store = createStore(reducer,applyMiddleware(thunk));

export default store;