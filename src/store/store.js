import userInfoSlice from "../reducers/userInfoSlice";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import  {combineReducers}  from "@reduxjs/toolkit";

const { configureStore } = require("@reduxjs/toolkit")
const reducer = combineReducers(userInfoSlice)
const persistConfig = {
    timeout: 1, 
    key: "root",
    version: 1,
    storage
}
const persistedReducer = persistReducer(persistConfig, reducer);

 export const store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      })
})