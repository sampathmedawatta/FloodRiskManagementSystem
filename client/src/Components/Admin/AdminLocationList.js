import React from "react";

function AdminLocationList({
  locations,
  toggleEditModal,
  handleLocationAction,
}) {

    console.log(locations);
  return (
    <tbody>
      {locations.map((location, index) => (
        <tr key={index} className="tr-border">
          <td className="text-left">
            <p className="text-muted text-justify font-sm word-limit">
              {index + 1}
            </p>
          </td>
          <td className="text-left">
            <span className="text-muted text-justify font-sm word-limit">
              {location.name}
            </span>
          </td>
          <td className="text-left">
            <p className="text-muted text-justify font-sm word-limit">
              {location.value}
            </p>
          </td>
          <td className="text-left">
            <p className="text-muted text-justify font-sm word-limit">
              {location.type}
            </p>
          </td>
          <td className="text-left">
            <p className="text-muted text-justify font-sm word-limit">
              {location.address}
            </p>
          </td>
          <td className="text-left">
            <p className="text-muted text-justify font-sm word-limit">
              {location.contact}
            </p>
          </td>
          <td className="text-left">
            <p className="text-muted text-justify font-sm word-limit">
              {location.refLocation}
            </p>
          </td>
          <td className="text-left">
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
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default AdminLocationList;
