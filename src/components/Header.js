import React from "react";

export default function Header({ title }) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark mb-2">
        <span className="navbar-brand mb-0 h1">{title}</span>
        <span className="navbar-text">Cleaning Times - 0900 1400 1600</span>
      </nav>
    </div>
  );
}
