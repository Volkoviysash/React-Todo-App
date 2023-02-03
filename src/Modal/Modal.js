import React from "react";
import "./Modal.css";

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isOpen: true })}>info</button>

        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <h1>Info</h1>
              <h3>How to add some todo?</h3>
              <p>
                To add some todo you should complete the form and push "Add
                todo" button
              </p>
              <h3>How to delete some todo?</h3>
              <p>To delete some todo you should push red "X" button</p>
              <button onClick={() => this.setState({ isOpen: false })}>
                Close info
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
