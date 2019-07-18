
import basketReducer from './basketReducer';

import { combineReducers } from 'redux';

export default combineReducers({
    basket: basketReducer
    //Any other reducer if you want to add should be placed here with alias
});
