import React, { useEffect, useState } from "react";
import { getCurrentDateInfo } from "../Shared/Utils";
import { getUserSession } from "../Shared/SessionUtils";
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
  const userSession = getUserSession();
  const userId = userSession.loggedUser;

  const handleAskQuery = async (e) => {
    e.preventDefault();
    try {
      if (queryTitle !== "" && queryDescription !== "") {
        const bodyData = {
          messageTitle: queryTitle,
          messageDescription: queryDescription,
          messageDate: currentDate,
          inquiryStatus: "PENDING",
          userId: userId,
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
                <div className="col-md-10">
                  <h6 className="text-left ">
                    <i className="bi bi-person-raised-hand " />
                    Your Queries
                  </h6>
                </div>
                <div className="col-md-2 text-center mt-1 mb-1">
                  <button
                    type="button"
                    class="btn ask-query-button"
                    data-bs-toggle="modal"
                    data-bs-target="#askQueryModal"
                  >
                    <i className="bi bi-chat-text-fill" />
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
                    {queries && queries.length > 0 ? (
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
                                  className="btn query-button-replied"
                                  data-bs-toggle="modal"
                                  data-bs-target={`#staticBackdrop-${queryItem.id}`}
                                >
                                  View Reply
                                </button>
                                <div
                                  className="modal fade"
                                  id={`staticBackdrop-${queryItem.id}`}
                                  data-bs-backdrop="static"
                                  data-bs-keyboard="false"
                                  tabIndex="-1"
                                  aria-labelledby={`staticBackdropLabel-${queryItem.id}`}
                                  aria-hidden="true"
                                >
                                  <div className="modal-dialog modal-dialog-centered modal-lg">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h4
                                          className="modal-title fs-5"
                                          id="staticBackdropLabel"
                                        >
                                          <i className="bi bi-chat-text-fill" />{" "}
                                          &nbsp;&nbsp; Your Query
                                        </h4>
                                        <button
                                          type="button"
                                          className="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        ></button>
                                      </div>
                                      <div className="modal-body">
                                        <div className="row">
                                          <div className="col-3 text-justify font-lg color-brand-1">
                                            Title :{" "}
                                          </div>
                                          <div className="col-9 text-muted text-justify font-lg ">
                                            {queryItem.messageTitle}
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-3 text-justify font-lg color-brand-1 font-weight-bold">
                                            Query:{" "}
                                          </div>
                                          <div className="col-9 text-muted text-justify font-lg ">
                                            {queryItem.messageDescription}
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-3 text-justify font-lg color-brand-1 font-weight-bold">
                                            Title :{" "}
                                          </div>
                                          <div className="col-9 text-muted text-justify font-lg ">
                                            {queryItem.replyTitle}
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-3 text-justify font-lg color-brand-1">
                                            Answer:{" "}
                                          </div>
                                          <div className="col-9 text-muted text-justify font-lg ">
                                            {queryItem.replyDescription}
                                          </div>
                                        </div>
                               
                                      </div>
                                      <div className="modal-footer pt-0"></div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                            {queryItem.inquiryStatus === "PENDING" && (
                              <button
                                type="button"
                                className="btn query-button-pending"
                              >
                                Pending Reply
                              </button>
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3" className="text-center">
                          No pending inquiries to display
                        </td>
                      </tr>
                    )}
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
              <h1 class="modal-title fs-5"><i class="bi bi-chat-text-fill fs-5"></i> 	&nbsp;&nbsp; Ask your Query</h1>
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
                    Title *
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
                    Description: *
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
