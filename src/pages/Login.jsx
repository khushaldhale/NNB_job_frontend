import withForm from "../hoc/withForm";
import { login } from "../redux/slices/authSlice";

const Login = ({ changeHandler, submitHandler, formData }) => {
  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={submitHandler}>
        <h2 className="auth-title">Welcome Back</h2>

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

        <div className="mb-4">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter your password"
            onChange={changeHandler}
            value={formData.password}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Sign In
        </button>

        <div className="text-center mt-3">
          <small className="text-muted">
            Don't have an account? <a href="/register">Register here</a>
          </small>
        </div>
      </form>
    </div>
  );
};

export default withForm(
  Login,
  { email: "", password: "" },
  login,
  "/dashboard/jobs"
);
