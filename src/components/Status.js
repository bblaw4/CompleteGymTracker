import React from "react";

export default function Status({ status }) {
  return (
    <div>
      <h3 className="text-center">Status</h3>
      {status === 10 ? (
        <>
          <h2 className="text-danger">
            {status} Patrons are currently in the gym
          </h2>
          <p>
            Due to the increasing risks of COVID-19 and to practice social
            distancing, restrictions are in place that only permit 10 patrons at
            a time. Unfortunately, the gym is at maximum capacity. You must wait
            until someone leaves to enter this area. - SOTF-EA
          </p>
        </>
      ) : status === 0 ? (
        <p className="text-center">There are no patrons in the gym</p>
      ) : (
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4 text-center">{status}</h1>
            <p className="lead text-center">Patron(s) in the gym</p>
          </div>
        </div>
      )}
    </div>
  );
}
