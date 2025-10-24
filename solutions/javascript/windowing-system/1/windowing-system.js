// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
const MIN_WIDTH = 1;
const MIN_HEIGHT = 1;

const MIN_X = 0;
const MIN_Y = 0;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {  
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    const clampedWidth = clamp(newSize.width, MIN_WIDTH, this.screenSize.width - this.position.x);
    const clampedHeigh = clamp(newSize.height, MIN_HEIGHT, this.screenSize.height - this.position.y);

    this.size.resize(clampedWidth, clampedHeigh);
  }

  move(newPosition) {
    const clampedPositionX = clamp(newPosition.x, MIN_X, this.screenSize.width - this.size.width);
    const clampedPositionY = clamp(newPosition.y, MIN_Y, this.screenSize.height - this.size.height);

    this.position.move(clampedPositionX, clampedPositionY);
  }
}

export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));

  return programWindow;
}
