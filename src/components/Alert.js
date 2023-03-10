import React from "react";

export default function Alert(props) {
  return (
    <div className={`alert  alert-${props.alert.type} alert-dismissible fade show`} role="alert"
    >
      {props.alert.message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true"></span>
      </button>
    </div>
  );
}
