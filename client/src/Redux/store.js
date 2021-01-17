import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
const initialState = {};
// const persistConfig = {
//   key: "authType",
//   storage: storage,
//   whitelist: ["auth"],
// };
// const pReducer = persistReducer(persistConfig, rootReducer);
const middleware = [thunk];
export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
// const persistor = persistStore(store);
// export { persistor, store };
