import {createStore,combineReducers,applyMiddleware} from 'redux';
import homedisplayReducer from './Home/reducer'
import loginReducer from './Login/reducer'
import livedisplayReducer from './Live/reducer'

import thunk from 'redux-thunk';

const reducer=combineReducers({homedisplayReducer,loginReducer,livedisplayReducer});

const store = createStore(reducer,applyMiddleware(thunk));

export default store;