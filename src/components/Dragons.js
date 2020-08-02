import React from "react";
import ItemDetailDragons from "./ItemDetailDragons";

function Dragons({ selected }) {
  const [dragons, setDragons] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      let result = await fetch(
        "https://api.spacexdata.com/v3/dragons"
      ).then((response) => response.json());
      setDragons(result);
    }
    fetchData();
  }, [selected]);

  return (
    <>
      {dragons &&
        dragons[0] &&
        dragons.map((dragon) => {
          return (
            <div key={dragon.name}>
              <ItemDetailDragons obj={dragon} />
            </div>
          );
        })}
    </>
  );
}

export default Dragons;
