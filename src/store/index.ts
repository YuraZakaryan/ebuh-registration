import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { fileReducer } from './reducer/fileSlice'
import { userReducer } from './reducer/userSlice'

const rootReducer = combineReducers({
	user: userReducer,
	file: fileReducer,
})

export const store = () =>
	configureStore({
		reducer: rootReducer,
	})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
