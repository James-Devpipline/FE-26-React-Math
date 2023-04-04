export function returnSum(x, y) {
  const Sum = x + y;

  return Sum;
}

export function returnDifference(x, y) {
  let difference = 0;
  if (x > y) {
    difference = x - y;
  } else {
    difference = y - x;
  }

  return difference;
}

returnDifference(3, 5);
returnDifference(5, 3);
