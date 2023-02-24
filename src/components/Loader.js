import React from "react";

function Loader({ loading }) {
  if (loading) {
    return <div id="loader">Loading.....</div>;
  } else {
    return null;
  }
}

export default Loader;
