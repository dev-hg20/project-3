import React from "react";

function ModalStructure(props) {
  const { mod } = props;
  return (
    <div id="search-modal" class="modal">
      <div class="modal-content">
        <h6 class="modal-header">{mod.title}</h6>
        <div class="divider"></div>
        <p id="modal-message">{mod.message}</p>
        <hl></hl>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-teal btn-flat">
          Close
        </a>
      </div>
    </div>
  );
}

export default ModalStructure;
