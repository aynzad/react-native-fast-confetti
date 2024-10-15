export type FlakeSize = {
  width: number;
  height: number;
};

export type ConfettiProps = {
  /**
   * @description number of confetti pieces to render.
   * @default 200
   */
  count?: number;
  /**
   * @description the size confetti's flake.
   */
  flakeSize?: FlakeSize;
  /**
   * @description The width of the confetti's container.
   * @default SCREEN_WIDTH
   */
  width?: number;
  /**
   * @description The height of the confetti's container.
   * @default SCREEN_HEIGHT
   */
  height?: number;
  /**
   * @description The duration of confetti animation (milliseconds).
   * @default 8000
   */
  duration?: number;
  /**
   * @description Wether the animation should play on mount.
   * @default true
   */
  autoplay?: boolean;
  /**
   * @description The array of confetti flakes color.
   */
  colors?: string[];
  /**
   * @description The delay in milliseconds before the confetti animation starts automatically after initialization.
   * @default 0
   */
  autoStartDelay?: number;
};

export type ConfettiMethods = {
  /**
   * @description start the animation from the beginning
   */
  restart: () => void;
  /**
   * @description pause the animation
   */
  pause: () => void;
  /**
   * @description reset the animation and not play it
   */
  reset: () => void;
  /**
   * @description resume the animation from where it paused
   */
  resume: () => void;
};
