import { combineReducers } from 'redux';
import MyFetchDataReducer from './components/FetchData/reducer';

export default combineReducers({
  myFetchData: MyFetchDataReducer,
});
