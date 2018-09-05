import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    // for when user presses 'esc' or clicks background to close modal:
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
  >
    <div>
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
      <button className="button" onClick={props.handleClearSelectedOption}>Ok</button>
    </div>
  </Modal>
);

export default OptionModal;