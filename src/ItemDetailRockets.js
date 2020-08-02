import React, { useState } from "react";
import { Text, Card } from "@mrshmllw/smores-react";
import Modal from "react-modal";

Modal.setAppElement("#root");
function ItemDetailRockets({ obj }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="item-detail-container">
      <Card className="card-container">
        <Text tag="h3"> {obj.rocket_name}</Text>
        <button onClick={() => setModalIsOpen(true)}>
          <Text color="blue5">More info</Text>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(12, 12, 12, 0.529)",
              display: "flex",
              justifyContent: "center",
            },
            content: {
              backgroundColor: "rgb(238, 238, 238)",
              minWidth: "400px",
              maxWidth: "600px",
              maxHeight: "350px",
              position: "relative",
            },
          }}
        >
          <p class="more-info">First Flight: {obj.first_flight} </p>
          <p class="more-info">Height(m): {obj.height.meters}</p>
          <p class="more-info">Boosters: {obj.boosters}</p>
          <p class="more-info">Country: {obj.country} </p>{" "}
          <p class="more-info">Cost per Launch: {obj.cost_per_launch}</p>
          <p class="more-info">Company: {obj.company}</p>
          <p class="more-info">Success Rate: {obj.success_rate_pct}</p>
          <div>
            <button onClick={() => setModalIsOpen(false)}>Close</button>
          </div>
        </Modal>
      </Card>
    </div>
  );
}

export default ItemDetailRockets;
