import React, { useState, useEffect } from "react";

function AdminPasswordChange() {
  useEffect(() => {
  }, );
 
  return (
    <div className="col-md-6">
      <div className="box-content">
        <div className="container">
          <div className="panel-white">
            <div className="panel-head">
              <div className="row">
                <div className="col-md-7">
                  <h6 className="text-start">
                    <i className="bi bi-lock fs-5 " />
                    &nbsp;&nbsp;Change Password
                  </h6>
                </div>
              </div>
            </div>
            <div>
              <div className="panel-body">
                <div className="box-padding">
                  <div className="row">
                    <div className="">
                      <div className="form-group mb-30">
                        <label className="font-sm color-brand-1 mb-10">
                          Old Password
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Steven Job"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="form-group mb-30">
                        <label className="font-sm color-brand-1 mb-10">
                          New Password *
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Steven Job"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="form-group mb-30">
                        <label className="font-sm color-brand-1 mb-10">
                          Confirmed password *
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Steven Job"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group mt-10">
                        <div className="form-group mt-10 text-end">
                          <button className="btn btn-login hover-up">
                            &nbsp;&nbsp;Change Password
                          </button>
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

export default AdminPasswordChange;
