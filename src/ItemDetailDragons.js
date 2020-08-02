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
          <p class="more-info">Active: {obj.active ? "Active" : "Inactive"}</p>
          <p class="more-info">First Flight: {obj.first_flight}</p>
          <p class="more-info">Weight(kg): {obj.dry_mass_kg}</p>
          <p class="more-info">Weight(lbs): {obj.dry_mass_lb}</p>
          <p class="more-info">Crew Capacity: {obj.crew_capacity}</p>
          <p class="more-info">Orbit Duration Year: {obj.orbit_duration_yr}</p>
          <p class="more-info">Material: {obj.heat_shield.material}</p>

          <div>
            <button onClick={() => setModalIsOpen(false)}>Close</button>
          </div>
        </Modal>
      </Card>
    </div>
  );
}

export default ItemDetailDragons;
