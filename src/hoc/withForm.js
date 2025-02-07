import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const withForm = (OldComponent, initialValues, thunk, url) => {


	return (props) => {
		//  all enhancement in the component should be done here
		const [formData, setFormData] = useState(initialValues);

		const dispatch = useDispatch()
		const navigate = useNavigate()
		console.log("hoc data : ", formData)


		function changeHandler(event) {
			const { name, value, type, checked } = event.target;
			setFormData((prevData) => {
				return {
					...prevData,
					[name]: type === "checkbox" ? checked : value
				}
			})
		}

		function submitHandler(event) {
			event.preventDefault()
			console.log("hoc data submit : ", formData)
			dispatch(thunk(formData))
				.then((action) => {
					if (action.payload.success) {
						toast.success(action.payload.message)
						navigate(url)
					} else {
						toast.error(action.payload.message)
					}
				})
		}

		// form  validation is remained to do 


		return <OldComponent {...props} changeHandler={changeHandler} submitHandler={submitHandler} formData={formData}></OldComponent>
	}
}

export default withForm