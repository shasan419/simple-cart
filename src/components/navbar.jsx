import React from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1">
          Cart{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </span>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
