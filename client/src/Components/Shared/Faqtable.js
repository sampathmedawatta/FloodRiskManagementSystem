import React, { useState, useEffect } from "react";
import FaqService from "../../services/faq.service";
import { Link } from "react-router-dom";
import { getUserSession } from "./SessionUtils";

function Faqtable() {
  const { userType } = getUserSession();
  const [faqs, setFaqs] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const faqList = await FaqService.getAllFaqs();
        if (faqList) {
          setFaqs(faqList);
        }
      } catch (error) {
        console.error("Error while fetching faq data", error);
      }
    };
    fetchFaqs();
  }, []);

  return (
    <div className="col-md-10">
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
                <div className="accordion" id="">
                  {faqs?.map((faq, index) => (
                    <div className="accordion-item" key={index}>
                      <h2 className="accordion-header" id={`heading${index}`}>
                        <button
                          className={`accordion-button ${
                            index === 0 ? "" : "collapsed"
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${index}`}
                          aria-expanded="true"
                          aria-controls={`collapse${index}`}
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <div>
                            <i className="bi bi-question-circle-fill fs-6 " />
                          </div>
                          <div className="ps-2">{faq.title}</div>
                        </button>
                      </h2>
                      <div
                        id={`collapse${index}`}
                        className={`accordion-collapse collapse ${
                          index === 0 ? "show" : ""
                        }`}
                        aria-labelledby={`heading${faq.index}`}
                        data-bs-parent=""
                      >
                        <div className="accordion-body text-muted text-12">
                          {faq.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <br></br>
              {userType !== "UnRegistered" && (
                <div className="row align-items-center ms-2 mb-4">
                  <div className="col-md-4 text-12">
                    No answer to your questions! Please send a message to us.
                  </div>
                  <div className="col-md-2 text-12">
                    <Link to={"/ask-query"}>
                      <button className="btn btn-login hover-up text-12 w-100">
                        <i class="bi bi-chat-text-fill fs-5" /> &nbsp;Ask Your
                        Query{" "}
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Faqtable;
