/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import infoReducer from './infoReducer';
import cartReducer from './cartReducer';
import restReducer from './restReducer';

const rootReducer = combineReducers({
    infoReducer,
    cartReducer,
    restReducer,
});

export default rootReducer;
