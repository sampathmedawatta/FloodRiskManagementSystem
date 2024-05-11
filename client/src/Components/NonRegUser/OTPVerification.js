import React,{ useState, useEffect } from "react";
import VerifyService from "../../services/verify.service";


const OTPPopup = ({ user,token,  onClose }) => {

    const [formData, setFormData] = useState({
      otpCode: "",
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const validateForm = () => {
      let isValid = true;
      const errors = {};

      // Validation form data
      if (!formData.otpCode.trim()) {
        errors.otpCode = "OTP is required";
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
        // check otp
        const response = await VerifyService.otp(formData, user._id);
        if (response) {
            if(response.verified){
              // save user in session
              sessionStorage.setItem("user", JSON.stringify(user));
              sessionStorage.setItem("userToken", token);

              getDashboardRoute(user.type);
            }
            else{
                setSuccessMessage("OTP verification failed!");
            }
        }
        else{
            setSuccessMessage("OTP verification failed!");
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
                  <i class="bi bi-lock fs-5"></i>&nbsp; OTP verification
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
          <div className="row text-start">
            <div class="col-md-12">
              <span className="color-brand-1 text-12">Enter OTP</span>
            </div>
          </div>
          <div className="row text-muted text-12 td-nowrap ">
            <div class="col-md-12">
              <div className="form-group">
                <input
                  className={`form-control ${
                    errors.otpCode ? "is-invalid" : ""
                  }`}
                  id="input-1"
                  type="text"
                  required
                  name="otpCode"
                  value={formData.otpCode}
                  onChange={handleChange}
                  placeholder="1111"
                />
                {errors.otpCode && (
                  <div className="invalid-feedback">{errors.otpCode}</div>
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
                Verify
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default OTPPopup;
