import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {fileReducer, fileSlice, userReducer, userSlice} from "@store/reducer";

const rootReducer = combineReducers({
	[userSlice.name]: userReducer,
	[fileSlice.name]: fileReducer,
})

export const store = () =>
	configureStore({
		reducer: rootReducer,
	})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
