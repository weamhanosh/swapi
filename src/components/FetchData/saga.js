import {MyFetchDataActionsConstants} from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import MyFetchDataActions from './actions'

function* getMovies(action){
  // console.log('FetchDataSaga=', action);
  try {
    // const res = yield call(fetch, action.uri,
    //   {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'Application/json'
    //     }
    //   });
    // const json = yield call([res, 'json']); //retrieve body of response
    // console.log('ServerReturned=', json);

    const response = yield call(fetch, action.uri);
    const data = yield call([response, response.json]);
    yield put(MyFetchDataActions.editMovies(data));

  } catch (e) {
    console.log("received error:");
    console.log(e);
    yield put(MyFetchDataActions.failureAction());
  }
}

function* MyFetchDataSaga() {
  //using takeEvery, you take the action away from reducer to saga
  yield takeEvery(MyFetchDataActionsConstants.GET_MOVIES_ACTION, getMovies);
}

export default MyFetchDataSaga;
