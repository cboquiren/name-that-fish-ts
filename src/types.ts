// If you have any types that are SHARED BY MANY COMPONENTS,put them here
export type TGameOver = {
  gameEnd: boolean;
};

export type TScore = {
  correctCount: number;
  incorrectCount: number;
};