import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




export const login = createAsyncThunk("login", async (data, { rejectWithValue }) => {
	try {

		const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})

		if (!response.ok) {
			const errorData = await response.json()
			return rejectWithValue(errorData)
		}

		return await response.json()
	}
	catch (error) {
		console.log(error)
		return rejectWithValue(error)
	}
})


export const logout = createAsyncThunk("logout", async (_, { rejectWithValue }) => {
	try {
		const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/logout`, {
			method: "GET",
			credentials: "include"
		})

		if (!response.ok) {
			const errorData = await response.json()
			return rejectWithValue(errorData)

		}
		return await response.json()
	}
	catch (error) {
		console.log(error)
		return rejectWithValue(error)
	}
})


export const register = createAsyncThunk("register", async (data, { rejectWithValue }) => {
	try {

		const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/register`, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})

		if (!response.ok) {
			const errorData = await response.json()
			return rejectWithValue(errorData)
		}
		return await response.json()
	}
	catch (error) {
		console.log(error)
		return rejectWithValue(error)
	}
})


const initialState = {
	isLoading: null,
	isError: null,
	isLoggedIn: localStorage.getItem("isLoggedIn") ? localStorage.getItem("isLoggedIn") === "true" : null,
	userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : {}
}

export const authSlice = createSlice(
	{
		name: "auth",
		initialState,
		extraReducers: (builder) => {

			//login
			builder.addCase(login.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
				.addCase(login.fulfilled, (state, action) => {
					state.isLoading = false;
					state.isError = false;
					state.isLoggedIn = true;


					const userInfo = {
						fname: action.payload.data.fname,
						lname: action.payload.data.lname,
						accountType: action.payload.data.accountType
					}
					state.userInfo = userInfo
					localStorage.setItem("userInfo", JSON.stringify(userInfo))
					localStorage.setItem("isLoggedIn", true)
				})
				.addCase(login.rejected, (state, action) => {
					state.isLoading = false;
					state.isError = true;
					console.log("error occured : ", action.payload)
				})

			// logout

			builder.addCase(logout.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
				.addCase(logout.fulfilled, (state, action) => {
					state.isLoading = false;
					state.isError = false;
					state.isLoggedIn = false;
					state.userInfo = {}
					localStorage.removeItem("isLoggedIn")
					localStorage.removeItem("userInfo")
					console.log("logged out successfully : ", action.payload)
				})
				.addCase(logout.rejected, (state, action) => {
					state.isLoading = false;
					state.isError = true;
					console.log("error occured : ", action.payload)
				})

			// register

			builder.addCase(register.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
				.addCase(register.fulfilled, (state, action) => {
					state.isLoading = false;
					state.isError = false;
					console.log("user is registered succesfully : ", action.payload.data)
				})
				.addCase(register.rejected, (state, action) => {
					state.isLoading = false;
					state.isError = true;
					console.log("error occured : ", action.payload)
				})
		}
	}
)

export default authSlice.reducer