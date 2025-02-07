import withForm from "../hoc/withForm";
import { register } from "../redux/slices/authSlice";

const Register = ({ changeHandler, submitHandler, formData }) => {
  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={submitHandler}>
        <h2 className="auth-title">Create Account</h2>

        <div className="row mb-3">
          <div className="col-md-6 mb-3 mb-md-0">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              name="fname"
              placeholder="John"
              onChange={changeHandler}
              value={formData.fname}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lname"
              placeholder="Doe"
              onChange={changeHandler}
              value={formData.lname}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="name@example.com"
            onChange={changeHandler}
            value={formData.email}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Create a strong password"
            onChange={changeHandler}
            value={formData.password}
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Contact Number</label>
          <input
            type="tel"
            className="form-control"
            name="contact"
            placeholder="Your phone number"
            onChange={changeHandler}
            value={formData.contact}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Create Account
        </button>

        <div className="text-center mt-3">
          <small className="text-muted">
            Already have an account? <a href="/login">Login here</a>
          </small>
        </div>
      </form>
    </div>
  );
};

export default withForm(
  Register,
  {
    fname: "",
    lname: "",
    email: "",
    password: "",
    contact: "",
    accountType: "user",
  },
  register,
  "/login"
);
