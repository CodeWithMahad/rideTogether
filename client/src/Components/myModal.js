import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

class MyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  toggleModal = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <>
        <NavLink type="button" className="text-black ms-1" onClick={this.toggleModal}>
          <FontAwesomeIcon style={{height:'20px'}} icon={faUser} />
        </NavLink>
        <div className={`modal ${this.state.show ? 'show' : ''}`} style={{display: this.state.show ? 'block' : 'none'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal heading</h5>
                <button type="button" className="close" onClick={this.toggleModal}>
                  <span>×</span>
                </button>
              </div>
              <div className="modal-body">
                <img src="your-image-url" alt="Your description" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={this.toggleModal}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MyModal;
