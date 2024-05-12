import React from "react";

function AdminLocationList({
  locations,
  toggleEditModal,
  handleLocationAction,
}) {
  return (
    <tbody>
      {locations.map((location, index) => (
        <tr key={index} className="tr-border">
          <td className="text-left">
            <p className="text-muted text-justify font-sm word-limit">
              {index + 1}
            </p>
          </td>
          <td className="text-left pl-4">
            <span className="text-muted  text-justify font-sm">
              {location.title}
            </span>
          </td>
          <td className="text-left">
            <p className="text-muted text-justify font-sm word-limit">
              {location.description}
            </p>
          </td>
          <td className="text-left">
            <span
              className={`label-status ${
                location.active ? "label-active" : "label-inactive"
              }`}
            >
              {location.active ? "Active" : "Inactive"}
            </span>
          </td>
          <td className="text-left">
            {location.active ? (
              <>
                <button
                  type="button"
                  className="btn btn-pops"
                  onClick={() => toggleEditModal(location)}
                >
                  <i className="bi bi-pencil-square fs-6"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-pops"
                  onClick={() => handleLocationAction(location.id, "unpublish")}
                >
                  <i className="bi bi-trash fs-6"></i>
                </button>
              </>
            ) : (
              <button
                type="button"
                className="btn btn-pops "
                onClick={() => handleLocationAction(location.id, "publish")}
              >
                <i className="bi bi-check-circle-fill fs-6"></i>
              </button>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default AdminLocationList;
