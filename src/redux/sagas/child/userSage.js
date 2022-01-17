import { call, put, takeEvery } from "redux-saga/effects";
import userAPI from "../../../apis/user";
import { showMessage } from "../../../assets/helper";
import { messText } from "../../../assets/mess";
import { userAction } from "../../action/userAction";
import { changeStatusLoading } from "../../slices/assetSlice";
import { saveInforOfUser, saveListUser } from "../../slices/userSlice";

export function* fetchDataUser(params) {
  try {
    let result = yield call(
      fetch,
      `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${params.payload}`
    );
    const resultBody = yield result.json();
    if (result.status === 200) {
      yield put(changeStatusLoading(false));
      yield put(saveListUser(resultBody));
    } else {
      yield put(changeStatusLoading(false));
      showMessage("error", messText.error_fetch);
    }
  } catch (error) {
    yield put(changeStatusLoading(false));
    showMessage("error", messText.error_fetch);
  }
}

export function* userSaga() {
  yield takeEvery(userAction.FETCH_DATA_USER, fetchDataUser);
}
