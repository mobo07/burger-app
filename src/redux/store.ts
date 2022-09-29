import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredientsSlice";
import storageSession from 'redux-persist/es/storage/session';
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: storageSession,
}

const persistedReducer = persistReducer(persistConfig, ingredientsReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
  });

  export const persistor = persistStore(store);
  
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch