import React, { useState, useEffect } from "react";

function AdminTodayForecast() {
  return (
    <div className="col-md-12">
      <div className="box-content">
        <div className="container">
          <div className="panel-white">
            <div className="panel-head">
              <div className="row">
                <div className="col-md-7">
                  <h6 className="text-start">
                    <i className="bi bi-question-circle-fill fs-5 " />
                    &nbsp;&nbsp;Frequently Asked Questions (FAQ)
                  </h6>
                </div>
                <div className="col-md-5">
                  <p className="text-end font-xs color-text-paragraph-2"></p>
                </div>
              </div>
            </div>
            <div>
              <div className="panel-body">
                <div className="table-responsive">
                  <table className="table no-wrap user-table mb-0">
                    <thead className="border-bottom thead-header">
                      <tr>
                        <th
                          scope="col"
                          className="pl-4"
                          style={{ width: "30%" }}
                        >
                          Title
                        </th>
                        <th scope="col" style={{ width: "50%" }}>
                          Description
                        </th>
                        <th scope="col" style={{ width: "10%" }}>
                          Status
                        </th>
                        <th scope="col" style={{ width: "10%" }}>
                          Manage
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-left pl-4">
                          <span className="text-muted font-sm">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean
                          </span>
                        </td>
                        <td className="text-left">
                          <p className="text-muted font-sm word-limit">
                            commodo ligula eget dolor. Aenean commodo ligula
                            eget dolor. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natcommodo ligula eget dolor.
                            Aenean massa. Cum sociis natcommodo ligula eget
                            dolor. Aenean massa. Cum sociis natcommodo ligula
                            eget dolor. Aenean massa. Cum sociis natoque
                            penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Donec quam felis, ultricies nec,
                            pellentesque eu, pretium quis, sem. Nulla consequat
                            massa quis enim. Donec pede justo, fringilla vel,
                            aliquet nec, vulputate eget, arcu.{" "}
                            <span class="more-content"> .......</span>
                          </p>
                        </td>
                        <td className="text-center">
                          <span class="label-status label-inactive">
                            Inactive
                          </span>
                    
                        </td>
                        <td className="text-center">
                          <button type="button" class="btn btn-pops">
                            <i class="bi bi-file-earmark-text-fill fs-6"></i>
                          </button>
                          <button type="button" class="btn btn-pops">
                            <i class="bi bi-trash fs-6"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left pl-4">
                          <span className="text-muted font-sm">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean
                          </span>
                        </td>
                        <td className="text-left">
                          <p className="text-muted font-sm word-limit">
                            commodo ligula eget dolor. Aenean commodo ligula
                            eget dolor. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natcommodo ligula eget dolor.
                            Aenean massa. Cum sociis natcommodo ligula eget
                            dolor. Aenean massa. Cum sociis natcommodo ligula
                            eget dolor. Aenean massa. Cum sociis natoque
                            penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Donec quam felis, ultricies nec,
                            pellentesque eu, pretium quis, sem. Nulla consequat
                            massa quis enim. Donec pede justo, fringilla vel,
                            aliquet nec, vulputate eget, arcu.{" "}
                            <span class="more-content"> .......</span>
                          </p>
                        </td>
                        <td className="text-center">
                          <span class="label-status label-active">Active</span>
                        </td>
                        <td className="text-center">
                          <button type="button" class="btn btn-pops">
                            <i class="bi bi-file-earmark-text-fill fs-6"></i>
                          </button>
                          <button type="button" class="btn btn-pops">
                            <i class="bi bi-trash fs-6"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="paginations text-center">
            <ul class="pager">
              <li><a class="pager-prev" href="#"></a> <i class="bi bi-caret-left-fill"></i></li>
              <li><a class="pager-number active" href="#">1</a></li>
              <li><a class="pager-number" href="#">2</a></li>
              <li><a class="pager-number" href="#">3</a></li>
              <li><a class="pager-number" href="#">4</a></li>
              <li><a class="pager-number" href="#">5</a></li>
              <li><a class="pager-number " href="#">6</a></li>
              <li><a class="pager-number" href="#">7</a></li>
              <li><a class="pager-next" href="#"></a><i class="bi bi-caret-right-fill"></i></li>
            </ul>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminTodayForecast;
