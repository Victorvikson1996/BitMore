import {combineReducers, createStore} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension/lib/types/logOnly';
import Reducer from './Reducer';

const Store = createStore(combineReducers({Reducer}), composeWithDevTools());

export default Store;
