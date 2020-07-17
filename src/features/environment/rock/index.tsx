import React from "react";
import { Position, generateStyles } from "../../../config/control";

interface Rock{
    position: Position
}

export const Rock: React.FC<Rock> = ({ position }) => {
  return <div style={generateStyles(position, "Rock")}></div>;
};


