import React, { useState } from "react";
import { Text, Card } from "@mrshmllw/smores-react";
import Modal from "react-modal";

Modal.setAppElement("#root");
// props
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
        >
          <p>
            Country: {obj.country} First Flight: {obj.first_flight}
            Success Rate: {obj.success_rate_pct}
          </p>
          <div>
            <button onClick={() => setModalIsOpen(false)}>Close</button>
          </div>
        </Modal>
      </Card>
    </div>
  );
}

export default ItemDetailRockets;
