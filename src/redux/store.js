import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import jobSlice from "./slices/jobSlice";



export const store = configureStore(
	{
		reducer: {
			auth: authSlice,
			job: jobSlice
		}
	}
)