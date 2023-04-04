export function returnSum(x, y) {
  const functionSum = sum([x, y]);

  return functionSum;
}

export function returnDifference(x, y) {
  if (x > y) {
    const difference = x - y;
  } else {
    const difference = y - x;
  }

  return difference;
}

returnDifference(3, 5);
returnDifference(5, 3);
