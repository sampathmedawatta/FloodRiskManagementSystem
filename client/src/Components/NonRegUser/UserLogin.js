import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import UserService from "../../services/user.service";

function UserLogin() {
  

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
                            <p className="font-sm text-brand-2">Welcome Back! </p>
                            <h2 className="mt-10 mb-5 text-brand-1">Member Login</h2>
                            <p className="font-sm text-muted mb-30">Access to all features. No credit card required.</p>
                            <button className="btn social-login hover-up mb-20"><img src="imgs/icon-google.svg" alt="google" /><strong>Sign in with Google</strong></button>
                            <div className="divider-text-center"><span>Or continue with</span></div>
                          </div>
                          <form className="login-register text-start mt-20" action="#">
                            <div className="form-group">
                              <label className="form-label" htmlFor="input-1">Email address *</label>
                              <input className="form-control" id="input-1" type="text" required name="fullname" placeholder="Steven Job" />
                            </div>
                            <div className="form-group">
                              <label className="form-label" htmlFor="input-4">Password *</label>
                              <input className="form-control" id="input-4" type="password" required name="password" placeholder="************" />
                            </div>
                            <div className="login_footer form-group d-flex justify-content-between">
                              <label className="cb-container">
                                <input type="checkbox" /><span className="text-small">Remember me</span><span className="checkmark" />
                              </label><a className="text-muted" href="#">Forgot Password</a>
                            </div>
                            <div className="form-group">
                              <button className="btn btn-login hover-up w-100" type="submit" name="login">Login</button>
                            </div>

                            <div className="text-muted text-center">Don't have an Account? &nbsp;&nbsp; 
                            <Link to="/registration">Register</Link></div>

            
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
      </div>
    </div>
  </div>
</div>


  );
}

export default UserLogin;
