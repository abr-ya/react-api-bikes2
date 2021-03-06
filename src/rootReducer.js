//import { combineReducers } from "redux";
import {ADD, ADD_NUM, NETS} from './actions/actionTypes';

// при объединении
// import {combineReducers} from 'redux';
// import counter1 from 'path-to-file';
// import counter2 from 'path-to-file';

// export default combineReducers({
//     counter1, counter2
// })


const initialState = {
    counter: 100,
    nets: undefined,
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case NETS:
            return {
                ...state,
                nets: action.payload,
            }
        case ADD:
            return {
                ...state,
                counter: state.counter + 1
            }
        case ADD_NUM:
            return {
                ...state,
                counter: state.counter + 10
            }
        default:
            return state;
    }
}
