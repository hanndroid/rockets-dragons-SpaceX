import React from "react";
import Rockets from "./Rockets";
import Dragons from "./Dragons";
import { Text } from "@mrshmllw/smores-react";

function Choice() {
  const [choice, setChoice] = React.useState("");

  return (
    <>
      <div>
        <Text tag="h1" typo="header" color="pink5">
          SpaceX Rockets and Dragons
        </Text>
        <div>
          <button
            onClick={() => {
              setChoice("DRAGONS");
              console.log("DRAGONS");
            }}
          >
            <Text color="blue5">Dragons</Text>
          </button>
          <button
            onClick={() => {
              setChoice("ROCKETS");
              console.log("ROCKETS");
            }}
          >
            <Text color="blue5">Rockets</Text>
          </button>
        </div>
        <div className="button-container">
          {choice === "DRAGONS" && <Dragons selected={"DRAGONS"} />}
          {choice === "ROCKETS" && <Rockets selected={"ROCKETS"} />}
        </div>
      </div>

      <div className="marshmallow-link">
        <Text color="pink5">
          Want to insure your spacecraft? Get a quote now at{" "}
          <a class href="https://www.marshmallow.com/">
            Marshmallow
          </a>
        </Text>
      </div>
    </>
  );
}

export default Choice;
