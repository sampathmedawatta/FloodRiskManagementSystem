import React, { useState, useEffect } from "react";

function Pagination() {
  return (
<div class="paginations">
  <div className="row">
    <div className="col-md-6 text-start">
      <div className="box-border mr-10">
        <span className="text-sortby">Show:</span>
        <div className="dropdown dropdown-sort">
          <button
            className="btn dropdown-toggle"
            id="dropdownSort"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-display="static"
          >
            <span className="font-xxs ">10</span>
            <i className="fi-rr-angle-small-down" />
          </button>
          <ul
            className="dropdown-menu dropdown-menu-light"
            aria-labelledby="dropdownSort"
          >
            <li>
              <a className="dropdown-item font-xxs" href="#">
                10
              </a>
            </li>
            <li>
              <a className="dropdown-item font-xxs" href="#">
                20
              </a>
            </li>
            <li>
              <a className="dropdown-item font-xxs active "  href="#">
              30
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="col-md-6 text-end">
      <ul class="pager">
        <li>
          <a class="pager-prev" href="#"></a>{" "}
          <i class="bi bi-caret-left-fill"></i>
        </li>
        <li>
          <a class="pager-number active" href="#">
            1
          </a>
        </li>
        <li>
          <a class="pager-number" href="#">
            2
          </a>
        </li>
        <li>
          <a class="pager-next" href="#"></a>
          <i class="bi bi-caret-right-fill"></i>
        </li>
      </ul>
    </div>
  </div>
</div>

  );
}
export default Pagination;
