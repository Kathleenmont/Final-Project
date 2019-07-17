import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./style.css";
import forwardRef from "@restart/context/forwardRef";

class ModalRating extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      selectedOption: ""
    };
  }

  // this.state = {
  //       show: false,
  //     };

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Button variant="dark" onClick={this.handleShow} className="tried-btn">
          Tried
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>How was this dish?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleFormSubmit}>
              <div className="radio radio-1">
                <label>
                  <input type="radio" name="optradio" data-id="1" value="1" onChange={this.handleOptionChange} checked={this.state.selectedOption === "1"}/>
                 1 - Not my thing
                </label>
              </div>
              <div className="radio radio-2">
                <label>
                  <input type="radio" name="optradio" data-id="2" value="2" onChange={this.handleOptionChange} checked={this.state.selectedOption === "2" }/>
                  2 - Was okay
                </label>
              </div>
              <div className="radio radio-3">
                <label>
                  <input type="radio" name="optradio" className="radio3" data-id="3" value="3"  onChange={this.handleOptionChange} checked={this.state.selectedOption === "3"}/>
                  3 - Would like to have again
                </label>
              </div>
              <div className="radio radio-4">
                <label>
                  <input type="radio" name="optradio" data-id="4" value="4" onChange={this.handleOptionChange} checked={this.state.selectedOption === "4"}/>
                  4 - Must have again
                </label>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" className="close-btn" onClick={this.handleClose}>
              Close
            </Button>
            <Button
              className="rate-btn"
              variant="primary"
              type="submit"
              onClick={() => {
                this.props.tried(this.props.id, this.state.selectedOption);
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default ModalRating;
// render(<Example />);
