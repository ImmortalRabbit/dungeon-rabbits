import React from "react";
import { Position, generateStyles } from "../../../config/control";

interface Water{
    position: Position
}

export const Water: React.FC<Water> = ({ position }) => {
  return <div style={generateStyles(position, "Water")}></div>;
};
