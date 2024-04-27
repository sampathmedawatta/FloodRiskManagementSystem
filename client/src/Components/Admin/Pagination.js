import React, { useState, useEffect } from "react";

function Pagination() {
  return (
    <div class="paginations text-center">
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
  );
}
export default Pagination;
