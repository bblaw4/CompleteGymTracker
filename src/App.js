import React, { useState } from "react";

import Header from "./components/Header";
import SigninForm from "./components/SigninForm";
import Status from "./components/Status";
import CurrentUsers from "./components/CurrentUsers";

const _ = require("underscore");

export default function App() {
  const [users, setUsers] = useState([]);
  const [err, setError] = useState(false);
  // handle user submissions
  const handleUserSubmissions = user => {
    // check for dup names

    // get usernames
    const usernames = _.pluck(users, "name");

    // find dupes
    if (usernames.includes(user.name)) {
      setError(true);
      return;
    } else {
      setError(false);
      console.log(users);
      setUsers([...users, user]);
    }
  };

  // allow a user to leave the gym
  const removeUser = id => {
    const removedUsers = users.filter(user => user.id !== id);
    setUsers(removedUsers);
  };

  return (
    <div>
      <Header title="GYM TRACKER" />
      <div className="container">
        <div className="row">
          <div className="col">
            <SigninForm
              handleUsers={handleUserSubmissions}
              status={users.length}
              error={err}
            />
            <Status status={users.length} />
          </div>
          <div className="col">
            <CurrentUsers
              currentUsers={users}
              remove={removeUser}
              err={setError}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
