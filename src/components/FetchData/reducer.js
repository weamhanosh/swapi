import { MyFetchDataActionsConstants } from './constants'
import initialState from '../../initialState'

const MyFetchDataReducer = (state = initialState.myFetchData, action) => {
    // console.log('MyFetchDataReducerState=', state);
    switch (action.type) {

        case MyFetchDataActionsConstants.EDIT_MOVIES_ACTION:{
            // console.log('RECEIVED: MyFetchDataActionsConstants.EDIT_MOVIES_ACTION');
            // console.log('ACTION:', action);
            let movies = [];
            for(let i = 0; i < action.payload.results.length; i++){
                movies.push(action.payload.results[i].title);
            }
            state = state.set('failed', false);
            state = state.set('first_get_request', false);
            state = state.set('movies', movies);
            // console.log('NEW STATE=', state);
            return state;
        }

        case MyFetchDataActionsConstants.FETCH_FAILED_ACTION:{
            // console.log('RECEIVED: MyFetchDataActionsConstants.FETCH_FAILED_ACTION');
            // console.log('ACTION:', action);
            state = state.set('failed', true);
            // console.log('NEW STATE=', state);
            return state;
        }

        default: //otherwise state is lost!
            return state;
    }
};

export default MyFetchDataReducer;
