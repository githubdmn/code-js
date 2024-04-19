export const formRandomArray = (
  length: number,
  start: number,
  end: number,
): number[] => {
  const array: number[] = new Array(length);
  for (let i = 0; i < length; i++) {
    array[i] = Math.floor(Math.random() * end) + start;
  }
  return array;
};
