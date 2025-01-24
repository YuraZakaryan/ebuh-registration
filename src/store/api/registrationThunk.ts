import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { TRegistrationFormValues } from '../../components/registration/types'
import { TUser } from '../types/user'
import { $api } from './host'

export const registrationThunk = createAsyncThunk(
	'user/registration',
	async (form: TRegistrationFormValues, { rejectWithValue }) => {
		try {
			const { data } = await $api.post<TUser>('/users', form)
			return data
		} catch (error) {
			const err = error as AxiosError
			return rejectWithValue(err.message)
		}
	}
)
