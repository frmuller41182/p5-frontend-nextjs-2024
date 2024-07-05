// //We add some colors here to test, but I will also use a function that randomly generates a color if the
// user has a larger number of stocks in their portfolio than colors available.

export const colorsGraph = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A28AE5",
  "#FF6666",
  "#66B3FF",
  "#99FF99",
  "#FF99CC",
  "#FF9933",
  "#339966",
  "#FFCC00",
  "#9933FF",
  "#CCFF66",
  "#33CCFF",
  "#CC6699",
  "#9966CC",
  "#FF3399",
  "#66FF66",
  "#FF9966",
];

export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
