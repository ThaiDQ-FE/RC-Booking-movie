import { call, put, takeEvery } from "redux-saga/effects";
import movieAPI from "../../../apis/movie";
import { showMessage } from "../../../assets/helper";
import { messText } from "../../../assets/mess";
import { movieAction } from "../../action/movieAction";
import { saveListOfMovies } from "../../slices/movieSlice";
export function* fetchDataSaga() {
  try {
    let result = yield call(() => movieAPI.getListMovie());
    console.log(result);
    if (result.status === 200) {
      yield put(saveListOfMovies(result.data));
    } else {
      showMessage("error", messText.error_fetch);
    }
  } catch (error) {
    showMessage("error", messText.error_fetch);
  }
}

export function* movieSaga() {
  yield takeEvery(movieAction.FETCH_DATA_SAGA, fetchDataSaga);
}
