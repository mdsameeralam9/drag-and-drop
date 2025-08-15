import React from "react";

const Dialog = () => {
  return (
    <div className="dialog">
      <div className="dialog-content">
        <h2>Add new note</h2>
        <input type="text" placeholder="Note Title" />
        <textarea placeholder="Note Content" />
        <div className="dialog-action">
            <button className="btn btn-secondary">Cancel</button>
            <button className="btn btn-primary">Add</button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
