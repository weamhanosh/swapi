import { MyFetchDataActionsConstants } from './constants';

function editMovies(movies){
  return {
    type: MyFetchDataActionsConstants.EDIT_MOVIES_ACTION,
    payload: movies
  }
}

function getMovies(){
  return {
    type: MyFetchDataActionsConstants.GET_MOVIES_ACTION,
    uri: 'http://swapi.dev/api/films'
  }
}

function failureAction(){
  return {
    type: MyFetchDataActionsConstants.FETCH_FAILED_ACTION,
  }
}

let MyFetchDataActions = {
  editMovies,
  getMovies,
  failureAction
};

export default MyFetchDataActions;
