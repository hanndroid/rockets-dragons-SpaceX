import React from "react";
import ItemDetailRockets from "./ItemDetailRockets";

// props is 'selected', component is 'Rockets'
function Rockets({ selected }) {
  // state that holds the results of the API call
  const [rockets, setRockets] = React.useState([]);

  // when Rocketss component loads, perform a side effect that calls the API below
  // fetch returns a promise
  // promises are asynchronous (async)
  // because promises are async, and I want to wait for the promise
  // I'm adding the "await" to synchronise it
  //
  // await is never by itself, it needs its async buddy
  React.useEffect(() => {
    // define fetchData function that syncs an async call
    async function fetchData() {
      let result = await fetch(
        "https://api.spacexdata.com/v3/rockets"
      ).then((response) => response.json());
      // set value of rockets with result i.e const rockets = result;
      setRockets(result);
    }
    // call fetchData
    fetchData();
  }, [selected]);

  // if rocket exists AND 1st rocket exists, then
  return (
    <>
      {rockets &&
        rockets[0] &&
        rockets.map((rocket) => {
          return (
            <div>
              <ItemDetailRockets obj={rocket} />
            </div>
          );
        })}
    </>
  );
}

export default Rockets;
