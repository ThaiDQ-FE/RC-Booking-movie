import { all } from "redux-saga/effects";
import { movieSaga } from "./child/movieSaga";

export default function* rootSaga() {
  yield all([movieSaga()]);
}
