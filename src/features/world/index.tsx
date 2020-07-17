import React, { CSSProperties } from "react";
import { Player } from '../player/index';
import { Map } from '../map/index';
import { MAX_WIDTH, MAX_HEIGHT } from "../../const/const";

const worldStyles: CSSProperties = {
    position: "relative",
    top: 0,
    right: 0,
    width: MAX_WIDTH + "px",
    height: MAX_HEIGHT + "px",
    margin: "20px auto",
}

export const World: React.FC = () => {
    return (
      <>
        <div style={worldStyles}>
            <Map/>
            <Player position={{ x: 0, y: 0 }} />
        </div>
      </>
    );
  };
  