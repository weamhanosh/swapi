import { all } from 'redux-saga/effects'
import MyFetchDataSaga from './components/FetchData/saga'

export default function* Sagas() {
    yield all([
        MyFetchDataSaga()
    ])
}
