import React from "react";
import { Position, generateStyles } from "../../../config/control";

interface Grass{
    position: Position
}

export const Grass: React.FC<Grass> = ({ position }) => {
  return <div style={generateStyles(position, "Grass")}></div>;
};


