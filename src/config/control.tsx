import { CSSProperties } from "react";
import { CHARACTER_SIZE } from "../const/const";

export interface Position {
  x: number;
  y: number;
}

export function generateStyles(position: Position, elementName: string): CSSProperties {
    return {
      position: "absolute",
      top: position.x + "px",
      left: position.y + "px",
      transition: "1s",
      background: getBackground(elementName),
      backgroundSize: elementName === "Tree" ? "contain" : "",
      width: CHARACTER_SIZE + "px",
      height: CHARACTER_SIZE + "px",
    };
  }

function getBackground(elementName: string): string{
    if(elementName === "Player"){
        return "url('player/standing/player.png') no-repeat";
    } 
    if(elementName === "Rock"){
        return "url('land.png') no-repeat 0 -128px";
    }
    if(elementName === "Tree"){
        return "url('tree.png') no-repeat center";
    }
    if(elementName === "Water"){
        return "blue";
    }
    if(elementName === "Dirt"){
        return "url('land.png') no-repeat -64px 0";
    }
    if(elementName === "Grass"){
        return "url('land.png') no-repeat 0 0";
    }
    return "transparent";
}

export function throttle(fn: Function, wait: number) {
    let isCalled = false;
  
    return function (...args: any) {
      if (!isCalled) {
        const result = fn(...args);
        isCalled = true;
        setTimeout(function () {
          isCalled = false;
        }, wait);
        return result;
      }
      return null;
    };
  }