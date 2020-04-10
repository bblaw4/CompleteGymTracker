import React from "react";

function User({ userData, remove, err }) {
  const { id, name } = userData;
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center mb-2">
          {name}{" "}
          <span
            className="btn btn-danger float-right"
            onClick={() => {
              remove(id);
              err(false);
            }}
          >
            Leave
          </span>{" "}
        </li>
      </ul>
    </div>
  );
}

export default User;
