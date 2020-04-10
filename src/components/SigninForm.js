import React, { useState } from "react";
import { v4 as uid } from "uuid";

export default function SigninForm({ handleUsers, status, error }) {
  // state
  const [name, setName] = useState("");
  // handle Form data
  const handleSubmit = e => {
    e.preventDefault();
    // create a user object to store their information
    const user = { id: uid(), name: name.toUpperCase() };
    // prevent null/undefined names
    if (!name.trim()) {
      return;
    } else {
      // send data
      handleUsers(user);
      setName("");
    }
  };
  return (
    <div>
      {status === 10 ? null : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Please enter your name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            {error ? (
              <div className="alert alert-danger" role="alert">
                That person is already signed in. Enter a diffetent name.
              </div>
            ) : null}
          </div>
          <div>
            <button className="btn btn-success mb-5">Sign In</button>
          </div>
        </form>
      )}
    </div>
  );
}
