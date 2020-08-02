import React from "react";
import ItemDetailRockets from "./ItemDetailRockets";

function Rockets({ selected }) {
  const [rockets, setRockets] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      let result = await fetch(
        "https://api.spacexdata.com/v3/rockets"
      ).then((response) => response.json());
      setRockets(result);
    }
    fetchData();
  }, [selected]);

  return (
    <>
      {rockets &&
        rockets[0] &&
        rockets.map((rocket) => {
          return (
            <div key={rocket.rocket_name}>
              <ItemDetailRockets obj={rocket} />
            </div>
          );
        })}
    </>
  );
}

export default Rockets;
