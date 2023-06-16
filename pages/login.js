import React from "react";
import { useRouter } from "next/router";
import useAuthApi from "../hooks/useAuthApi";
import withValidation from "../utils/withValidation";
import { Button } from "../components/Button ";

const Login = ({ values, errors, handleChange, validate }) => {
  const [error, setError] = React.useState("");
  const router = useRouter();
  const { isLoading, login } = useAuthApi(router);

  const handleLogin = async (e) => {
    e.preventDefault();

    const isValid = validate();

    if (isValid) {
      try {
        await login(values.email, values.password);
      } catch (error) {
        setError(error.message || "An error occurred.");
      }
    }
  };

  return (
    <div className="login-container">
      <h1 className="text-color-light --font-weight-med">Login to Existing User</h1>
      <form onSubmit={handleLogin}>
        <div className="--align-start --dir-column gap-15 ">
          <label className="--font-weight-normal">Email*</label>
          <input
            type="email"
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            placeholder="test@gmail.com"
            required
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="--align-start --dir-column gap-15">
          <label className="--font-weight-normal">Password*</label>
          <input
            type="password"
            value={values.password}
            onChange={(e) => handleChange("password", e.target.value)}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            placeholder="Nafdsfr12#"
          />
          {errors.password && (
            <div className="invalid-feedback">
              {errors.password.map((errorMessage, index) => (
                <div key={index}>{errorMessage}</div>
              ))}
            </div>
          )}
        </div>
        <Button  text={isLoading ? "Logging in..." : "Login"} disabled={isLoading} />
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

const validationConfig = {
  
  email: {
    validationRule: (value) => value.includes("@"),
    error: "Invalid email format",
  },
  password: [
    {
      validationRule: (value) => value.length >= 8,
      error: "The password must contain at least 8 characters",
    },
    {
      validationRule: (value) => /[a-z]/.test(value),
      error: "The password must contain at least one lowercase letter",
    },
    {
      validationRule: (value) => /[A-Z]/.test(value),
      error: "The password must contain at least one uppercase letter",
    },
  ],
};

export default withValidation(Login, validationConfig);
