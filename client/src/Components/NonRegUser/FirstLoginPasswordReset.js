import React,{ useState, useEffect } from "react";
import AuthService from "../../services/auth.service";


const PasswordResetPopup = ({ user,token, oldPassword, onClose }) => {

    const [formData, setFormData] = useState({
      newPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const validateForm = () => {
      let isValid = true;
      const errors = {};

      // Validation form data
     
      if (!formData.newPassword.trim()) {
        errors.newPassword = "New Password is required";
        isValid = false;
      } else if (!/(?=.*\d)(?=.*[a-zA-Z]).{8,}/.test(formData.newPassword)) {
        errors.newPassword =
          "New password must contain at least one letter and one number, and must be at least 8 characters long";
        isValid = false;
      }

      if (!formData.newPassword.trim() === "oldPassword") {
        errors.newPassword = "New Password is required";
        isValid = false;
      }

      if (!formData.newPassword.trim()) {
        errors.newPassword = "New Password is required";
        isValid = false;
      }

      setErrors(errors);
      return isValid;
    };

     const getDashboardRoute = (userRole) => {
       if (userRole == "ADMIN") {
         window.location.href = "http://localhost:3000/admin-dashboard";
       } else if (userRole == "REGISTEREDUSER") {
         window.location.href = "http://localhost:3000/dashboard";
       }
     };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {

        // reset password
        const response = await AuthService.resetPassword(
          {
            newPassword: formData.newPassword,
            currentPassword: oldPassword,
          },
          user._id
        );

        if (response) {
          if (response.success) {
            // save user in session
            sessionStorage.setItem("user", JSON.stringify(user));
            sessionStorage.setItem("userToken", token);

            getDashboardRoute(user.type);

          } else {
            setSuccessMessage("Password reset failed!");
          }
        } else {
          setSuccessMessage("Password reset failed!");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        // Handle error submission if necessary
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="row">
          <div className="panel-head">
            <div className="row">
              <div class="col-md-10">
                <h6 className="text-start td-nowrap">
                  {" "}
                  <i class="bi bi-lock fs-5"></i>&nbsp; Change Password
                </h6>
              </div>
              <div class="col-md-2">
                <p onClick={onClose}>
                  <i class="bi bi-x-square-fill"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
        {successMessage && (
          <div className="alert alert-danger" role="alert">
            {successMessage}
          </div>
        )}
        <form
          className="login-register text-start mt-20"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label className="form-label" htmlFor="input-7">
                  Enter New Password *
                </label>
                <input
                  className={`form-control ${
                    errors.newPassword ? "is-invalid" : ""
                  }`}
                  id="input-7"
                  type="password"
                  required
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="************"
                />
                {errors.newPassword && (
                  <div className="invalid-feedback">{errors.newPassword}</div>
                )}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <button
                className="btn btn-login hover-up text-12 w-100"
                type="submit"
                name="login"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default PasswordResetPopup;
