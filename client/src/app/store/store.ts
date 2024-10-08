import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; 
import {persistReducer, } from "redux-persist"
import persistStore from "redux-persist/es/persistStore";
import { PersistPartial } from "redux-persist/es/persistReducer";
import meetReducer from "./meetSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["meet"]
}

const rootReducer = combineReducers({
  meet: meetReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
          },
        }),
});


export type RootState = ReturnType<typeof store.getState> & PersistPartial;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;

export const persistor = persistStore(store);
export default store;