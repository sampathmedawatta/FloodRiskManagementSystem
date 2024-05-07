import React, { useState, useEffect } from "react";
function UserRegistration() {
  return (
<div className="box-content">
  <div className="row">
    <div className="col-lg-12">
      <div className="row"> 
        <div className="col-lg-12"> 
          <div className="section-box">
            <div className="container"> 
              <div className="panel-white mb-30">
                <div className="box-padding">               
                  <div className="login-register"> 
                    <div className="row login-register-cover">
                      <div className=" col-md-8  mx-auto">
                        <div className="form-login-cover">
                          <div className="text-center">
                            <h2 className="mt-10 mb-5 text-brand-1">Registration</h2>
                            <p className="font-sm text-muted mb-30">Access to all features. No credit card required.</p>
                            <button className="btn social-login hover-up mb-20"><img src="imgs/icon-google.svg" alt /><strong>Sign up with Google</strong></button>
                            <div className="divider-text-center"><span>Or continue with</span></div>
                          </div>
                          <form className="login-register text-start mt-20" action="#">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="form-label" htmlFor="input-1">First Name *</label>
                                  <input className="form-control" id="input-1" type="text" required name="firstname" placeholder="Steven" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="form-label" htmlFor="input-2">Last Name *</label>
                                  <input className="form-control" id="input-2" type="text" required name="lastname" placeholder="Job" />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="form-label" htmlFor="input-3">Preferred Location *</label>
                                  <select className="form-control" id="input-3" required name="preferredlocation">
                                    <option value>Select Preferred Location</option>
                                    <option value="Kwun Tong">Kwun Tong</option>
                                    <option value="Sham Shui Po">Sham Shui Po</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="form-label" htmlFor="input-4">Email*</label>
                                  <input className="form-control" id="input-4" type="text" required name="contactno" placeholder="test@gmail.com" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="form-label" htmlFor="input-4">Contact No *</label>
                                  <input className="form-control" id="input-4" type="text" required name="contactno" placeholder={1234567890} />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="form-label" htmlFor="input-5">Password *</label>
                                  <input className="form-control" id="input-5" type="password" required name="password" placeholder="************" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="form-label" htmlFor="input-6">Re-Password *</label>
                                  <input className="form-control" id="input-6" type="password" required name="re-password" placeholder="************" />
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <button className="btn btn-login hover-up w-100" type="submit" name="login">Register</button>
                            </div>
                            <div className="text-muted text-center">Already have an account? <a href="login.html">Sign in</a>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></div></div></div>

    

  );
}
export default UserRegistration;
