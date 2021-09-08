/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import infoReducer from './infoReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    infoReducer,
    cartReducer,
});

export default rootReducer;
