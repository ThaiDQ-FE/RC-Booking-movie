import { useDispatch } from "react-redux";
import { call, put, takeEvery } from "redux-saga/effects";
import movieAPI from "../../../apis/movie";
import { showMessage } from "../../../assets/helper";
import { messText } from "../../../assets/mess";
import { movieAction } from "../../action/movieAction";
import { changeStatusLoading } from "../../slices/assetSlice";
import {
  saveInformationOfMovie,
  saveListOfMovies,
} from "../../slices/movieSlice";
export function* fetchDataSaga() {
  try {
    let result = yield call(() => movieAPI.getListMovie());
    if (result.status === 200) {
      yield put(saveListOfMovies(result.data));
    } else {
      showMessage("error", messText.error_fetch);
    }
  } catch (error) {
    showMessage("error", messText.error_fetch);
  }
}

export function* fetchInfomationMovie(params) {
  try {
    let result = yield call(() =>
      movieAPI.getInformationOfMovie(params.payload)
    );
    yield put(changeStatusLoading(true));
    if (result.status === 200) {
      yield put(saveInformationOfMovie(result.data));
      yield put(changeStatusLoading(false));
    } else {
      yield put(changeStatusLoading(false));
    }
  } catch (error) {
    yield put(changeStatusLoading(false));
    console.log(error);
  }
}

export function* movieSaga() {
  yield takeEvery(movieAction.FETCH_DATA_SAGA, fetchDataSaga);
  yield takeEvery(
    movieAction.FETCH_INFORMATION_MOVIE_SAGA,
    fetchInfomationMovie
  );
}
