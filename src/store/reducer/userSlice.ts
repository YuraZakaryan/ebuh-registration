import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { registrationThunk } from '@store/api/registrationThunk'
import { IInitialUserState, TUser } from '@store/types'

const initialState: IInitialUserState = {
	user: null,
	registration: {
		isLoading: false,
		isError: false,
	},
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		clearUser(state) {
			state.user = null
		},
	},
	extraReducers: builder => {
		builder
			.addCase(
				registrationThunk.fulfilled,
				(state, action: PayloadAction<TUser>) => {
					state.registration = {
						isLoading: false,
						isError: false,
					}
					state.user = action.payload
				}
			)
			.addCase(registrationThunk.pending, state => {
				state.registration = {
					isLoading: true,
					isError: false,
				}
			})
			.addCase(registrationThunk.rejected, state => {
				state.registration = {
					isLoading: false,
					isError: true,
				}
			})
	},
})

export const userReducer = userSlice.reducer
export const { clearUser } = userSlice.actions
