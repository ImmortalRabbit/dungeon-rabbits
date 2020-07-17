import React from "react";
import { Position, generateStyles } from "../../../config/control";

interface Dirt{
    position: Position;
}

export const Dirt: React.FC<Dirt> = ({ position }) => {
  return <div style={generateStyles(position, "Dirt")}></div>;
};
