import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";
import { assetSlice } from "./slices/assetSlice";
import { movieSlice } from "./slices/movieSlice";
import { userSlice } from "./slices/userSlice";

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
    asset: assetSlice.reducer,
    user: userSlice.reducer,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);
