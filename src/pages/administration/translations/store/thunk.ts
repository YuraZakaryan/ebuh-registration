import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { $edusHost } from '../../../../store/api/host'

export const GetLanguagesThunk = createAsyncThunk(
	'get/languages',
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await $edusHost.get('/languages')
			return data
		} catch (error) {
			const err = error as AxiosError
			return rejectWithValue(err.message)
		}
	}
)
