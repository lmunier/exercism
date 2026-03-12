//
// This is only a SKELETON file for the 'Bowling' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Frame {
  id = -1;
  pins = [];
}

export class Bowling {
  static MAX_PINS = 10;
  static MAX_FRAMES = 10;

  currentFrame;
  currentFrameId = -1;
  secondRoll = false;
  frames = [];

  roll(pins) {
    // 1. Validate pins
    if (pins < 0) throw new Error('Negative roll is invalid');
    if (pins > Bowling.MAX_PINS) throw new Error('Pin count exceeds pins on the lane');

    // 2. Start new frame if needed (not for frame 10 — handled separately)
    if (!this.secondRoll && this.currentFrameId < Bowling.MAX_FRAMES - 1) {
      this.currentFrameId++;
      this.currentFrame = new Frame();
      this.currentFrame.id = this.currentFrameId;
      this.frames[this.currentFrameId] = this.currentFrame;
    }

    // 3. Handle frame 10 separately
    if (this.currentFrameId === Bowling.MAX_FRAMES - 1) {
      const lastFrame = this.currentFrame;

      if (lastFrame.pins.length === 0) {
        lastFrame.pins.push(pins);
      } else if (lastFrame.pins.length === 1) {
        if (lastFrame.pins[0] !== Bowling.MAX_PINS && lastFrame.pins[0] + pins > Bowling.MAX_PINS) {
          throw new Error('Pin count exceeds pins on the lane');
        }
        lastFrame.pins.push(pins);
      } else if (lastFrame.pins.length === 2) {
        if (lastFrame.pins.length === 2) {
          const firstIsStrike = lastFrame.pins[0] === Bowling.MAX_PINS;
          const isSpare = !firstIsStrike && lastFrame.pins[0] + lastFrame.pins[1] === Bowling.MAX_PINS;
          const secondIsStrike = lastFrame.pins[1] === Bowling.MAX_PINS;
          const isBonus = firstIsStrike || secondIsStrike || isSpare;
        
          if (!isBonus) throw new Error('Cannot roll after game is over');
          
          if (firstIsStrike && !secondIsStrike && lastFrame.pins[1] + pins > Bowling.MAX_PINS) {
            throw new Error('Pin count exceeds pins on the lane');
          }
        
          lastFrame.pins.push(pins);
        }
      } else {
        throw new Error('Cannot roll after game is over');
      }
      return;
    }

    // 4. Validate sum on second roll
    if (this.secondRoll) {
      const sum = this.currentFrame.pins[0] + pins;
      if (sum > Bowling.MAX_PINS) throw new Error('Pin count exceeds pins on the lane');
    }

    // 5. Normal frame logic
    this.currentFrame.pins.push(pins);
    this.secondRoll = !this.secondRoll && pins !== Bowling.MAX_PINS;
  }

  score() {   
    const isComplete =
      this.frames.length === Bowling.MAX_FRAMES &&
      this.currentFrameId === Bowling.MAX_FRAMES - 1 &&
      !this.secondRoll &&
      (() => {
        const last = this.frames[Bowling.MAX_FRAMES - 1];
        const needsBonus = last.pins[0] === Bowling.MAX_PINS ||
                           last.pins[0] + last.pins[1] === Bowling.MAX_PINS;
        return needsBonus ? last.pins.length === 3 : last.pins.length === 2;
      })();
  
    if (!isComplete) throw new Error('Score cannot be taken until the end of the game');

    const rolls = this.frames.flatMap(f => f.pins);
    let score = 0;
    let i = 0;

    for (let frame = 0; frame < Bowling.MAX_FRAMES - 1; frame++) {
      if (rolls[i] === Bowling.MAX_PINS) {
        score += rolls[i] + rolls[i + 1] + rolls[i + 2];
        i += 1;
      } else if (rolls[i] + rolls[i + 1] === Bowling.MAX_PINS) {
        score += rolls[i] + rolls[i + 1] + rolls[i + 2];
        i += 2;
      } else {
        score += rolls[i] + rolls[i + 1];
        i += 2;
      }
    }

    score += (rolls[i] ?? 0) + (rolls[i + 1] ?? 0) + (rolls[i + 2] ?? 0);

    return score;
  }
}


