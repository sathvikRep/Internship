import React, { useState } from "react";

function SignupForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
    const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
    const getPasswordStrength = (password) => {
    if (password.length < 6) return "Weak";

    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    if (hasUpper && hasNumber) return "Strong";

    return "Medium";
  };
    const validate = () => {
    let newErrors = {};

    if (!validateEmail(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };
    const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setSuccess("Signup successful!");

      setForm({
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setErrors(validationErrors);
      setSuccess("");
    }
  };
    return (
    <div className="container">
      <h2>📝 Smart Signup Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        />
        <p className="error">{errors.email}</p>

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
        />
        <p className="error">{errors.password}</p>

        {/* Password Strength */}
        {form.password && (
          <p>
            Strength: <b>{getPasswordStrength(form.password)}</b>
          </p>
        )}

        {/* Confirm Password */}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <p className="error">{errors.confirmPassword}</p>

        <button type="submit">Sign Up</button>
      </form>

      <p className="success">{success}</p>
    </div>
  );
}

export default SignupForm;