import React from "react";
import { Position, generateStyles } from "../../../config/control";

interface Tree{
    position: Position
}

export const Tree: React.FC<Tree> = ({ position }) => {
  return <div style={generateStyles(position, "Tree")}></div>;
};
