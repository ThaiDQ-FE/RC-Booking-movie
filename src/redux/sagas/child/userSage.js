import { call, put, takeEvery } from "redux-saga/effects";
import userAPI from "../../../apis/user";
import { userAction } from "../../action/userAction";
import { changeStatusLoading } from "../../slices/assetSlice";
import { saveInforOfUser } from "../../slices/userSlice";

export function* fetchDataUser(params) {}

export function* userSaga() {
  yield takeEvery(userAction.FETCH_DATA_USER, fetchDataUser);
}
