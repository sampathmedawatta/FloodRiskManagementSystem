import React, { useEffect, useState } from "react";
import { getCurrentDateInfo } from "../Shared/Utils";
import InquiriesService from "../../services/inquires.service";

const QueryTable = ({ queryData }) => {
  const [queries, setQueries] = useState(queryData);
  const [queryTitle, setQueryTitle] = useState("");
  const [queryDescription, setQueryDescription] = useState("");
  const [errors, setErrors] = useState({
    titleError: "",
    descriptionError: "",
  });
  const { currentDate } = getCurrentDateInfo();
  //TODO : After the user registrations we have to load userid here
  const userId = "662b8e69e452dd7cd0626de6";

  const handleAskQuery = async (e) => {
    e.preventDefault();
    try {
      if (queryTitle !== "" && queryDescription !== "") {
        const bodyData = {
          messageTitle: queryTitle,
          messageDescription: queryDescription,
          messageDate: currentDate,
          inquiryStatus: "PENDING",
          userid: userId
        };
        const response = await InquiriesService.createInquiry(bodyData);
        if (response) {
          // Reset input fields and clear errors upon successful submission
          setQueries([...queries, bodyData]);
          setQueryTitle("");
          setQueryDescription("");
          setErrors({
            titleError: "",
            descriptionError: "",
          });
        }
      } else {
        setErrors({
          titleError: queryTitle === "" ? "Title can not be empty" : "",
          descriptionError:
            queryDescription === "" ? "Description can not be empty" : "",
        });
      }
    } catch (error) {
      console.error("Error while sending inquiry", error);
    }
  };

  useEffect(() => {
    setQueries(queryData);
  }, [queryData]);

  return (
    <>
      <div className="section-box query-section-box">
        <div className="container">
          <div className="panel-white">
            <div className="panel-head">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h6 className="text-left ">
                    <i className="bi bi-person-raised-hand " />
                    Ask Your Query
                  </h6>
                </div>
                <div className="col-md-4 text-center mt-1 mb-1">
                  <button
                    type="button"
                    class="btn ask-query-button"
                    data-bs-toggle="modal"
                    data-bs-target="#askQueryModal"
                  >
                    Ask a query
                  </button>
                </div>
              </div>
            </div>
            <div className="panel-body">
              <div className="table-responsive">
                <table className="table no-wrap user-table mb-0">
                  <thead className="border-bottom thead-header">
                    <tr>
                    <th className="col-3 pl-4 text-start">Title</th>
                      <th className="col-7 pl-4 text-start">Question Asked</th>
                      <th className="col-2 pl-4 text-start">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Boolean(queries) &&
                      queries.map((queryItem) => (
                        <tr className="tr-border" key={queryItem.id}>
                          <td className="pl-4">
                            <span className="text-muted font-sm">
                              {queryItem.messageTitle}
                            </span>
                          </td>
                          <td className="pl-4">
                            <span className="text-muted font-sm">
                              {queryItem.messageDescription}
                            </span>
                          </td>
                          <td>
                            {queryItem.inquiryStatus === "REPLY" && (
                              <>
                                <button
                                  type="button"
                                  class="btn query-button-replied"
                                  data-bs-toggle="modal"
                                  data-bs-target={`#staticBackdrop-${queryItem.id}`}
                                >
                                  Replied
                                </button>
                                <div
                                  class="modal fade"
                                  id={`staticBackdrop-${queryItem.id}`}
                                  data-bs-backdrop="static"
                                  data-bs-keyboard="false"
                                  tabindex="-1"
                                  aria-labelledby={`staticBackdropLabel-${queryItem.id}`}
                                  aria-hidden="true"
                                >
                                  <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h4
                                          class="modal-title fs-5"
                                          id="staticBackdropLabel"
                                        >
                                          {queryItem.messageTitle}
                                        </h4>
                                        <button
                                          type="button"
                                          class="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        ></button>
                                      </div>
                                      <div class="modal-body">
                                        <p class="query-title">
                                          Query you asked
                                        </p>
                                        <p>{queryItem.messageDescription}</p>
                                        <hr />
                                        <p class="query-title">Reply</p>
                                        <p>{queryItem.replyDescription}</p>
                                        <hr />
                                      </div>
                                      <div class="modal-footer pt-0">
                                        <button
                                          type="button"
                                          class="btn btn-secondary"
                                          data-bs-dismiss="modal"
                                        >
                                          Close
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                            {queryItem.inquiryStatus === "PENDING" && (
                              <button
                                type="button"
                                class="btn query-button-pending"
                              >
                                Pending
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="askQueryModal"
        tabindex="-1"
        aria-labelledby="askQueryModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5">Ask a question</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    value={queryTitle}
                    onChange={(e) => setQueryTitle(e.target.value)}
                  />
                  {errors.titleError && (
                    <span className="text-danger">{errors.titleError}</span>
                  )}
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">
                    Description:
                  </label>
                  <textarea
                    class="form-control"
                    value={queryDescription}
                    onChange={(e) => setQueryDescription(e.target.value)}
                  ></textarea>
                  {errors.descriptionError && (
                    <span className="text-danger">
                      {errors.descriptionError}
                    </span>
                  )}
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn forecast-button"
                onClick={(e) => handleAskQuery(e)}
              >
                Send query
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QueryTable;
