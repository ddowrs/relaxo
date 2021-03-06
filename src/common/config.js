export const LevelList = [
  {
    level: 0,
    board: [[2, 0]],
    tips: {
      showPointer: true,
      text: 'swipe right',
    },
  },
  {
    level: 1,
    board: [[0, -1, 0, -1, 0], [0, -1, 0, -1, 0], [3, -1, 3, -1, 3]],
    tips: {
      text: 'swipe up, move together',
    },
  },
  {
    level: 2,
    board: [[-1, -1, 0, -1], [3, 0, 0, 0], [-1, -1, 3, -1]],
    tips: {
      text: 'note the order',
    },
  },
  {
    level: 3,
    board: [
      [-1, -1, -1, -1, 3, -1, -1, -1],
      [-1, -1, -1, -1, 0, -1, -1, -1],
      [5, 0, 0, 0, 0, 0, 0, 0],
      [-1, -1, 0, -1, -1, -1, 0, -1],
      [-1, -1, 3, -1, -1, -1, 3, -1],
    ],
  },
  {
    level: 4,
    board: [[-1, -1, 0], [-1, -1, 0], [2, 3, 0]],
    tips: {
      text: 'numbers will be superimposed',
    },
  },
  {
    level: 5,
    board: [[0, -1, -1], [3, 0, 0], [2, -1, -1]],
  },
  {
    level: 6,
    board: [[-1, 2, 2, -1], [-1, 0, 0, 2], [2, 0, 0, -1]],
  },
  {
    level: 7,
    board: [[0, 0, 0], [-1, 0, -1], [-1, 0, -1], [-1, 0, -1], [-1, 7, -1]],
  },
  {
    level: 8,
    board: [
      [-1, -1, 0, -1, -1],
      [-1, -1, 0, -1, -1],
      [0, 0, 5, 0, 0],
      [-1, -1, 0, -1, -1],
      [-1, -1, 4, -1, -1],
    ],
  },
  {
    level: 9,
    board: [
      [-1, 3, -1, -1, -1],
      [-1, 0, 0, 0, 3],
      [-1, 0, -1, 0, -1],
      [2, 0, 0, 0, -1],
      [-1, -1, -1, 4, -1],
    ],
  },
  {
    level: 10,
    board: [
      [-1, 0, -1],
      [2, 0, -1],
      [-1, 0, 2],
      [2, 0, -1],
      [-1, 0, 2],
      [2, 0, -1],
      [-1, 0, 2],
      [-1, 2, -1],
    ],
  },
  {
    level: 11,
    board: [[2, 0, 3], [0, -1, 0], [3, 0, 0]],
  },
  {
    level: 12,
    board: [
      [4, 0, 0, 4],
      [0, -1, -1, 0],
      [0, -1, -1, 0],
      [0, -1, -1, 0],
      [0, 0, 2, 4],
    ],
  },
  {
    level: 13,
    board: [
      [-1, -1, -1, 0, -1, -1],
      [-1, -1, -1, 0, -1, -1],
      [-1, -1, -1, 0, -1, -1],
      [6, 0, 0, 0, 0, 2],
      [-1, -1, 0, -1, -1, -1],
      [-1, -1, 0, -1, -1, -1],
      [-1, -1, 4, -1, -1, -1],
    ],
  },
  {
    level: 14,
    board: [
      [-1, 0, 0, 5, -1],
      [-1, 0, 0, 0, -1],
      [-1, 4, 0, 0, -1],
      [-1, -1, -1, -1, -1],
      [-1, 3, -1, -1, -1],
      [-1, 0, 0, 3, 2],
      [-1, 0, 2, 0, -1],
      [2, 0, 0, 0, -1],
    ],
  },
  {
    level: 15,
    board: [
      [0, 0, 0, 0, 0, 5],
      [0, -1, -1, -1, 0, -1],
      [0, -1, 2, -1, 0, -1],
      [0, 3, 0, 0, 0, -1],
      [0, -1, -1, -1, 4, -1],
      [0, -1, -1, -1, -1, -1],
      [6, -1, -1, -1, -1, -1],
    ],
  },
];
