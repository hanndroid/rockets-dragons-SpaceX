import React, { useState } from "react";
import { Text, Card } from "@mrshmllw/smores-react";
import Modal from "react-modal";

Modal.setAppElement("#root");
function ItemDetailDragons({ obj }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="item-detail-container">
      <Card className="card-container">
        <Text tag="h3" color="blue5">
          {obj.name}
        </Text>
        <button onClick={() => setModalIsOpen(true)}>
          <Text color="blue5">View Image</Text>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(12, 12, 12, 0.529)",
            },
            content: {
              backgroundColor: "rgb(238, 238, 238)",
              fontFamily: "Nunito",
            },
          }}
        >
          <p class="more-info">Type: {obj.type}</p>
          <p class="more-info">
            Crew Capacity:
            {obj.crew_capacity}
          </p>
          <div>
            <button onClick={() => setModalIsOpen(false)}>Close</button>
          </div>
        </Modal>
      </Card>
    </div>
  );
}

export default ItemDetailDragons;
