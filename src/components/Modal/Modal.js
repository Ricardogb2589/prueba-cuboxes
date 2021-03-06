import React from "react";
import "./Modal.scss";

const Modal = props => {
  const { open, title, onClose, children } = props;

  return (
    <div
      className={`modal ${open && "show"}`}
      tabindex="-1"
      role="dialog"
      style={{
        display: open ? "block" : "none"
      }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
