import React, { useContext } from "react";
import { useRouter } from "next/router";
import useAuthApi from "../hooks/useAuthApi";
import withValidation from "../utils/withValidation";
import { Button } from "../components/Button ";

const Register = ({ values, errors, handleChange, validate }) => {
  // const isAuthenticated = useContext(AuthContext);
  const [error, setError] = React.useState("");
  const router = useRouter();
  const { isLoading, register } = useAuthApi(router);

  const handleRegister = async (e) => {
    e.preventDefault();

    const isValid = validate();

    if (isValid) {
      try {
        await register(
          values.firstName,
          values.lastName,
          values.email,
          values.phone,
          values.password,
          values.refer_user
        );
      } catch (error) {
        setError(error.message || "An error occurred.");
      }
    }
  };

  return (
    <div className="login-container">
      <h1 className="text-color-light --font-weight-med">Register a New User</h1>
      <form onSubmit={handleRegister}>
        <div className="--align-start --dir-column gap-15">
          <label htmlFor="firstName" className="--font-weight-normal">First Name*</label>
          <input
            type="text"
            id="firstName"
            value={values.firstName || ""}
            onChange={(e) => handleChange("firstName", e.target.value)}
            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
            required
            placeholder="firstName"
          />
          {errors.firstName && (
            <div className="invalid-feedback">{errors.firstName[0]}</div>
          )}
        </div>
        <div className="--align-start --dir-column gap-15">
          <label htmlFor="lastName" className="--font-weight-normal">Last Name*</label>
          <input
            type="text"
            id="lastName"
            value={values.lastName || ""}
            onChange={(e) => handleChange("lastName", e.target.value)}
            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
            required
            placeholder="lastName"
          />
          {errors.lastName && (
            <div className="invalid-feedback">{errors.lastName[0]}</div>
          )}
        </div>
        <div className="--align-start --dir-column gap-15">
          <label htmlFor="email" className="--font-weight-normal">Email*</label>
          <input
            type="email"
            id="email"
            value={values.email || ""}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            required
            placeholder="email"
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email[0]}</div>
          )}
        </div>
        <div className="--align-start --dir-column gap-15">
          <label htmlFor="phone" className="--font-weight-normal">Phone*</label>
          <input
            type="text"
            id="phone"
            value={values.phone || ""}
            onChange={(e) => handleChange("phone", e.target.value)}
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            required
            placeholder="phone"
          />
          {errors.phone && (
            <div className="invalid-feedback">{errors.phone[0]}</div>
          )}
        </div>
        <div className="--align-start --dir-column gap-15">
          <label htmlFor="password" className="--font-weight-normal">Password*  </label>
          <input
            type="password"
            id="password"
            value={values.password || ""}
            onChange={(e) => handleChange("password", e.target.value)}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            required
            placeholder="password"
          />
          {errors.password && (
            <div className="invalid-feedback">
              {errors.password.map((errorMessage, index) => (
                <div key={index}>{errorMessage}</div>
              ))}
            </div>
          )}
        </div>
        <Button
          text={isLoading ? "Registering..." : "Register"}
          disabled={isLoading}
          type='submit'
        />
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

const validationConfig = {
  firstName: {
    validationRule: (value) => value.trim() !== "",
    error: "First name is required",
  },
  lastName: {
    validationRule: (value) => value.trim() !== "",
    error: "Last name is required",
  },
  email: {
    validationRule: (value) => value.includes("@"),
    error: "Invalid email format",
  },
  phone: {
    validationRule: (value) => value.trim() !== "",
    error: "Phone is required",
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

export default withValidation(Register, validationConfig);
