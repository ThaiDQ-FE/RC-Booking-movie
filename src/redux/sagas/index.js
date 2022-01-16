import { all } from "redux-saga/effects";
import { movieSaga } from "./child/movieSaga";
import { userSaga } from "./child/userSage";

export default function* rootSaga() {
  yield all([movieSaga(), userSaga()]);
}
