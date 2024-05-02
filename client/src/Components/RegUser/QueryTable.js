import React from "react";

const QueryTable = () => {
  return (
    <div className="section-box">
      <div className="container">
        <div className="panel-white">
          <div className="panel-head">
            <div className="row">
              <div className="col-md-12">
                <h6 className="text-left">
                  <i className="bi bi-tsunami fs-5" />
                </h6>
              </div>
            </div>
          </div>
          <div className="panel-body">
            <div className="table-responsive">
              <table className="table no-wrap user-table mb-0">
                <thead className="border-bottom thead-header">
                  <tr>
                    <th
                     
                      className="col-8 pl-4 text-start"
                      
                    >
                      Question Asked
                    </th>
                    <th
                     
                      className="col-4 pl-4 text-start"
                      
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                {/* <AdminFaqList
          faqs={faqs}
          toggleEditModal={toggleEditModal}
          handleFAQAction={handleFAQAction}
        /> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryTable;
