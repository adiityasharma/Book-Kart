import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PURGE, PERSIST, REGISTER} from "redux-persist"


// persist configuration for user
const userPersistConfig = {
  key: "user",
  storage,
  whiteList: ["user", "isEmailVerified", "isLoggedIn"]
}

export const store = configureStore({
  reducer: {
    
  }
})