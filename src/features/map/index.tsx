import React, { CSSProperties  } from "react";
import { MAX_WIDTH, MAX_HEIGHT, CHARACTER_SIZE } from "../../const/const";
import { Dirt } from "../environment/dirt";
import { Water } from "../environment/water";
import { Tree } from "../environment/tree";
import { Rock } from "../environment/rock";
import { Grass } from "../environment/grass";

const mapStyles: CSSProperties = {
  backgroundColor: "green",
  position: "relative",
  top: 0,
  right: 0,
  width: MAX_WIDTH + "px",
  height: MAX_HEIGHT + "px",
};


function createDirt(x: number, y: number){
    return <Dirt position={{x: x, y: y}}/>;
}

function createRock(x: number, y: number){
    return <Rock position={{x: x, y: y}}/>;
}

function createWater(x: number, y: number){
    return <Water position={{x: x, y: y}}/>;
}

function createTree(x: number, y: number){
    return <Tree position={{x: x, y: y}}/>;
}

function createGrass(x: number, y: number){
    return <Grass position={{x: x, y: y}}/>;
}

function generateEnvironment(){
    let environment = [];
    for (let x = 0; x < MAX_HEIGHT; x+=CHARACTER_SIZE) {
        for (let y = 0; y < MAX_WIDTH; y+=CHARACTER_SIZE) {        
            const randomNumber = randomInt(0, 1);
            // const randomNumber = 0;
            switch(randomNumber){
                case 0:
                    environment.push(createGrass(x, y));
                    break;
                case 1:
                    environment.push(createDirt(x, y));
                    break;
                // case 2:
                //     environment.push(createWater(x, y));
                //     break;
                // case 3:
                //     environment.push(createRock(x, y));
                //     break;
                // case 4:
                //     environment.push(createTree(x, y));
                //     break;
            }
        }  
    }
    return environment;
}

/**
 * Generates a random integer between min and max (inclusive)
 * https://gist.github.com/ValeryToda/fbf1de017f91c0ec3da04116c5ccf8b5
 * @param  {number} min
 * @param  {number} max
 * @returns random generated integer
 */
function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const Map: React.FC = () => {
  
  const environment = generateEnvironment();

  return (
      <>
        <div style={mapStyles}>
            {environment}
        </div>;
      </>
  )
};


