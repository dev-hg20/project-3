import React from "react";

function Modals(props) {
  // const { modalHeader } = ".modal-header";
  // const { modalMEssage } = "#modal-message";

  // function showMessage(message, title = "Lets Talk Corona!") {
  //   { modalHeader }.text(title);
  //   // $("#modal-message").html(message);
  //   $("#search-modal").modal({ opacity: 0.2 });
  //   $("#search-modal").modal("open");
  // }
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

export default Modals;
