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
  saveDetailMovie,
  saveInformationShowTimes,
  saveInformationSeat,
} from "../../slices/movieSlice";
export function* fetchDataSaga() {
  try {
    let result = yield call(() => movieAPI.getListMovie());
    if (result.status === 200) {
      yield put(changeStatusLoading(false));
      yield put(saveListOfMovies(result.data));
    } else {
      yield put(changeStatusLoading(false));
      showMessage("error", messText.error_fetch);
    }
  } catch (error) {
    yield put(changeStatusLoading(false));
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

export function* fetchDetailMovie(params) {
  try {
    let result = yield call(() =>
      movieAPI.getInformationOfMovie(params.payload)
    );
    yield put(changeStatusLoading(true));
    if (result.status === 200) {
      yield put(saveDetailMovie(result.data));
      yield put(changeStatusLoading(false));
    } else {
      yield put(changeStatusLoading(false));
    }
  } catch (error) {
    yield put(changeStatusLoading(false));
    console.log(error);
  }
}

export function* fetchInfomationShowTimes(params) {
  try {
    let result = yield call(() =>
      movieAPI.getInformationShowTimes(params.payload)
    );
    yield put(changeStatusLoading(true));
    if (result.status === 200) {
      yield put(saveInformationShowTimes(result.data));
      yield put(changeStatusLoading(false));
    } else {
      yield put(changeStatusLoading(false));
    }
  } catch (error) {
    yield put(changeStatusLoading(false));
    console.log(error);
  }
}

export function* fetchInformationSeat(params) {
  try {
    let result = yield call(() =>
      movieAPI.getInformationShowTimeSchedule(params.payload)
    );
    yield put(changeStatusLoading(true));
    if (result.status === 200) {
      yield put(saveInformationSeat(result.data));
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
  yield takeEvery(movieAction.FETCH_DETAIL_MOVIE_SAGA, fetchDetailMovie);
  yield takeEvery(
    movieAction.FETCH_INFORMATION_SHOW_TIMES,
    fetchInfomationShowTimes
  );
  yield takeEvery(movieAction.FETCH_INFORMATION_SEAT, fetchInformationSeat);
}
