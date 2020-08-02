import React from "react";
import ItemDetailDragons from "./ItemDetailDragons";

// props is 'selected', component is 'Dragons'
function Dragons({ selected }) {
  // state that holds the results of the API call
  const [dragons, setDragons] = React.useState([]);

  // when Dragons component loads, perform a side effect that calls the API below
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
        "https://api.spacexdata.com/v3/dragons"
      ).then((response) => response.json());
      // set value of dragons with result i.e const dragons = result;
      setDragons(result);
    }
    // call fetchData
    fetchData();
  }, [selected]);

  // if dragon exists AND 1st dragon exists, then
  return (
    <>
      {dragons &&
        dragons[0] &&
        dragons.map((dragon) => {
          return (
            <div>
              <ItemDetailDragons obj={dragon} />
            </div>
          );
        })}
    </>
  );
}

export default Dragons;
