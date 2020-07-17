import React, { useRef, useEffect } from "react";
import {
  CHARACTER_SIZE,
  MAX_WIDTH,
  MAX_HEIGHT,
  LEFT,
  UP,
  DOWN,
  RIGHT,
} from "../../const/const";
import { Position, generateStyles, throttle } from "../../config/control";

interface Player {
  position: Position;
}

function movePlayer(direction: string, position: Position) {
  switch (direction) {
    case "WEST":
      if (position.x - CHARACTER_SIZE >= 0) {
        position.x -= CHARACTER_SIZE;
      }
      break;
    case "NORTH":
      if (position.y - CHARACTER_SIZE >= 0) {
        position.y -= CHARACTER_SIZE;
      }
      break;
    case "EAST":
      if (position.x + CHARACTER_SIZE < MAX_WIDTH) {
        position.x += CHARACTER_SIZE;
      }
      break;
    case "SOUTH":
      if (position.y + CHARACTER_SIZE < MAX_HEIGHT) {
        position.y += CHARACTER_SIZE;
      }
      break;
  }
  return position;
}

function onKeyDown(evt: KeyboardEvent, position: Position) {
  switch (evt.keyCode) {
    case LEFT:
      return movePlayer("WEST", position);
    case UP:
      return movePlayer("NORTH", position);
    case RIGHT:
      return movePlayer("EAST", position);
    case DOWN:
      return movePlayer("SOUTH", position);
    default:
      return position;
  }
}

interface PlayerAnimationStyles {
  animation: string;
  background: string;
}

function playerMovement(
  playerRef: HTMLDivElement,
  new_position: Position,
  evt: KeyboardEvent
) {
  playerRef.style.top = new_position.y + "px";
  playerRef.style.left = new_position.x + "px";
  const playerAnimation = getAnimation(evt);
  playerRef.style.background = playerAnimation.background;
  playerRef.style.animation = "none";
  setTimeout(function () {
    playerRef.style.animation = playerAnimation.animation;
  }, 100);
}

function getAnimation(evt: KeyboardEvent): PlayerAnimationStyles {
  const animationSettings: string = " 1s 1";
  const playerAnimationStyles: PlayerAnimationStyles = {
    animation: "none",
    background: "url('/player/standing/player.png')",
  };
  switch (evt.keyCode) {
    case LEFT:
      playerAnimationStyles.animation = "left" + animationSettings;
      playerAnimationStyles.background =
        "url('/player/moving/left/player1.png')";
      break;
    case UP:
      playerAnimationStyles.animation = "up" + animationSettings;
      playerAnimationStyles.background = "url('/player/moving/up/player1.png')";
      break;
    case RIGHT:
      playerAnimationStyles.animation = "right" + animationSettings;
      playerAnimationStyles.background =
        "url('/player/moving/right/player1.png')";
      break;
    case DOWN:
      playerAnimationStyles.animation = "down" + animationSettings;
      playerAnimationStyles.background =
        "url('/player/moving/down/player1.png')";
      break;
    default:
      return playerAnimationStyles;
  }
  return playerAnimationStyles;
}

const throttledKeyDown = throttle(onKeyDown, 500);
const throttlePlayerMovement = throttle(playerMovement, 500);
export const Player: React.FC<Player> = ({ position }) => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const new_position = throttledKeyDown(e, position);
      if (playerRef.current && new_position) {
        throttlePlayerMovement(playerRef.current, new_position, e);
      }
    };
    window.addEventListener("keydown", handler);
  });

  return (
    <>
      <div ref={playerRef} style={generateStyles(position, "Player")} />
    </>
  );
};
