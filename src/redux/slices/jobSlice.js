import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";





export const getAllJobs = createAsyncThunk("getAllJobs", async (_, { rejectWithValue }) => {
	try {

		const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/jobs`, {
			method: "GET",
			credentials: "include"
		})

		if (!response.ok) {
			const errorData = await response.json();
			return rejectWithValue(errorData)
		}

		return await response.json()
	}
	catch (error) {
		console.log(error)
		return rejectWithValue(error)
	}
})

export const createJob = createAsyncThunk("createJob", async (data, { rejectWithValue }) => {
	try {

		const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/jobs`, {
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

export const deleteJob = createAsyncThunk("deleteJob", async (data, { rejectWithValue }) => {
	try {

		const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/jobs/${data._id}`,
			{
				method: "DELETE",
				credentials: "include"
			}
		)

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

export const showApplications = createAsyncThunk("showApplications", async (data, { rejectWithValue }) => {
	try {

		const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/jobs/${data._id}/applications`, {
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

export const applyJob = createAsyncThunk("applyJob", async (data, { rejectWithValue }) => {
	try {
		console.log("applying ")

		const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/jobs/${data._id}/apply`, {
			method: "PUT",
			credentials: "include",
			headers: {
				"Content-Type": "application/json"
			}
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

export const shortListApplication = createAsyncThunk("shortListApplication", async (data, { rejectWithValue }) => {
	try {


		const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/jobs/${data._id}/shortlist`,
			{
				method: "PUT",
				credentials: "include",
				headers: {
					'Content-Type': "application/json"
				},
				body: JSON.stringify(data)
			}
		)

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

export const rejectApplication = createAsyncThunk("rejectApplication", async (data, { rejectWithValue }) => {
	try {

		const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/jobs/${data._id}/reject`,
			{
				method: "PUT",
				credentials: "include",
				headers: {
					'Content-Type': "application/json"
				},
				body: JSON.stringify(data)
			}
		)

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

export const updateJob = createAsyncThunk("updateJob", async (data, { rejectWithValue }) => {
	try {

		let job_id = data._id;
		delete data._id;
		const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/jobs/${job_id}`, {
			method: "PUT",
			credentials: 'include',
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



export const shortListed = createAsyncThunk("shortListed", async (data, { rejectWithValue }) => {
	try {

		const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/jobs/${data._id}/shortlisted`, {
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



export const pending = createAsyncThunk("pending", async (data, { rejectWithValue }) => {
	try {

		const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/jobs/${data._id}/pending`, {
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


export const rejected = createAsyncThunk("rejected", async (data, { rejectWithValue }) => {
	try {

		const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/jobs/${data._id}/rejected`, {
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


export const appliedJobs = createAsyncThunk("appliedJobs", async (data, { rejectWithValue }) => {
	try {

		const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/jobs/applied`, {
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

const initialState = {
	isLoading: null,
	isError: null,
	jobs: [],
	applications: [],
	shortListed: [],
	pending: [],
	rejected: [],
	applied: []
}


export const jobSlice = createSlice(
	{
		name: "job",
		initialState,
		extraReducers: (builder) => {

			// getting all jobs
			builder.addCase(getAllJobs.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
				.addCase(getAllJobs.fulfilled, (state, action) => {
					state.isLoading = false;
					state.isError = false;
					state.jobs = action?.payload?.data;

				})
				.addCase(getAllJobs.rejected, (state, action) => {
					state.isLoading = false;
					state.isError = true;
					console.log("error occured: ", action.payload)
				})

			// creating a job 
			builder.addCase(createJob.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
				.addCase(createJob.fulfilled, (state, action) => {
					state.isLoading = false;
					state.isError = false;
					state.jobs = [...state.jobs, action?.payload?.data]
				})
				.addCase(createJob.rejected, (state, action) => {
					state.isLoading = false;
					state.isError = true;
					console.log("error occured : ", action.payload)
				})


			// deleting the job 
			builder.addCase(deleteJob.pending, (state) => {
				state.isLoading = true;
				state.isError = false;

			})
				.addCase(deleteJob.fulfilled, (state, action) => {
					state.isLoading = false;
					state.isError = false;
					console.log(action.payload)
					state.jobs = state.jobs.filter((element) => {
						if (element._id === action.payload.data._id) {
							return false;
						}
						else {
							return true;
						}
					})
				})

			//  apply for a job 

			builder.addCase(applyJob.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
				.addCase(applyJob.fulfilled, (state, action) => {
					state.isLoading = false;
					state.isError = false;
					console.log("job is applied succesfully : ", action.payload.data)
				})
				.addCase(applyJob.rejected, (state, action) => {
					state.isLoading = false;
					state.isError = true;
					console.log("error occured : ", action.payload)
				})

			//  show all applications

			builder.addCase(showApplications.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
				.addCase(showApplications.fulfilled, (state, action) => {
					state.isLoading = false;
					state.isError = false;
					console.log("applications are : ", action.payload.data)
					state.applications = action.payload.data;

				})
				.addCase(showApplications.rejected, (state, action) => {
					state.isError = true;
					state.isLoading = false;
					console.log("error occured : ", action.payload)
				})

			//  shortList applications 

			builder.addCase(shortListApplication.pending, (state) => {
				state.isLoading = true;
				state.isError = false
			})
				.addCase(shortListApplication.fulfilled, (state, action) => {
					state.isLoading = false;
					state.isError = false;
					console.log("application is shotlisted : ", action.payload.data)
				})
				.addCase(shortListApplication.rejected, (state, action) => {
					state.isLoading = false;
					state.isError = true;
					console.log("error occured : ", action.payload)
				})

			//reject applications

			builder.addCase(rejectApplication.pending, (state) => {
				state.isLoading = true;
				state.isError = false
			})
				.addCase(rejectApplication.fulfilled, (state, action) => {
					state.isLoading = false;
					state.isError = false;
					console.log("application is rejected  : ", action.payload.data)
				})
				.addCase(rejectApplication.rejected, (state, action) => {
					state.isLoading = false;
					state.isError = true;
					console.log("error occured : ", action.payload)
				})


			// update job 

			builder.addCase(updateJob.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
				.addCase(updateJob.fulfilled, (state, action) => {
					state.isLoading = false;
					state.isError = false;
					state.jobs = state.jobs.map((element) => {
						if (element._id === action.payload.data._id) {
							return action.payload.data
						}
						else {
							return element
						}
					})
				})
				.addCase(updateJob.rejected, (state, action) => {
					state.isLoading = false;
					state.isError = true;
					console.log("error occured : ", action.payload)
				})

			// shortlisted applications 

			builder.addCase(shortListed.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
				.addCase(shortListed.fulfilled, (state, action) => {
					state.isLoading = false;
					state.isError = false;
					state.shortListed = action.payload.data
				})
				.addCase(shortListed.rejected, (state, action) => {
					state.isLoading = false;
					state.isError = true;
					console.log("error occured : ", action.payload)
				})


			// rejected applications
			builder.addCase(rejected.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
				.addCase(rejected.fulfilled, (state, action) => {
					state.isLoading = false;
					state.isError = false;
					state.rejected = action.payload.data
				})
				.addCase(rejected.rejected, (state, action) => {
					state.isLoading = false;
					state.isError = true;
					console.log("error occured : ", action.payload)
				})


			// pending applications
			builder.addCase(pending.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
				.addCase(pending.fulfilled, (state, action) => {
					state.isLoading = false;
					state.isError = false;
					state.pending = action.payload.data
				})
				.addCase(pending.rejected, (state, action) => {
					state.isLoading = false;
					state.isError = true;
					console.log("error occured : ", action.payload)
				})


			// applied jobs


			builder.addCase(appliedJobs.pending, (state, action) => {
				state.isLoading = true;
				state.isError = false;
			})
				.addCase(appliedJobs.fulfilled, (state, action) => {
					state.isLoading = false;
					state.isError = false;
					state.applied = action.payload.data;
					console.log("applied jobs : ", action.payload.data)
				})
				.addCase(appliedJobs.rejected, (state, action) => {
					state.isLoading = false;
					state.isError = true;
					console.log("error occured : ", action.payload)
				})
		}
	}
)


export default jobSlice.reducer