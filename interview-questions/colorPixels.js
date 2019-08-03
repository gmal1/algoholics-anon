/*
photoshop bucket color fill feature
given a 2d matrix representing a screen of pixels each of some color and a coordinate on the screen + a new color
change the color of the target pixel to the new color and also change any pixels "connected" to the target pixel
that shared the target's color
*/

function fill(screen, coord, newColor) {
  const targetColor = screen[coord[0]][coord[1]];
  const screenClone = screen.map(row => row.map(pixel => pixel));
  if (targetColor === newColor) return screenClone;
  // console.log(screenClone);
  return dfs(screenClone, coord);

  function dfs(s, c) {
    if (c[0] >= s.length || c[1] >= s[0].length || c[0] < 0 || c[1] < 0) return;
    if (s[c[0]][c[1]] !== targetColor) return;
    s[c[0]][c[1]] = newColor;
    dfs(screenClone, [c[0] + 1, c[1]]);
    dfs(screenClone, [c[0] - 1, c[1]]);
    dfs(screenClone, [c[0], c[1] + 1]);
    dfs(screenClone, [c[0], c[1] - 1]);
    return s;
  }
}

const testScreen1 = [
  ['R', 'G', 'G', 'R', 'R', 'R'],
  ['G', 'G', 'R', 'R', 'R', 'R'],
  ['R', 'G', 'R', 'R', 'R', 'G'],
  ['G', 'G', 'G', 'R', 'R', 'R'],
];
const testScreen2 = [
  ['R', 'G', 'B'],
  ['G', 'G', 'R'],
  ['G', 'R', 'R'],
  ['G', 'G', 'B'],
  ['B', 'B', 'B'],
  ['G', 'G', 'R'],
];
const testScreen3 = [['A', 'B'], ['A', 'B']];

console.log(fill(testScreen1, [0, 3], 'B'));
console.log(fill(testScreen2, [0, 1], 'B'));
console.log(fill(testScreen3, [0, 1], 'A'));
