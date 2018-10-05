import { 
        LOGIN_ATTEMP,
        LOGIN_SUCCESS,
        LOGIN_FAILED 
} from '../actions/types';

const INITIAL_STATE = {loading: false, user: null, error:''};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case Action:
        //     return{
        //         ...state,
        //         ...action.playload
        //     }
        default: return state;
    }
};