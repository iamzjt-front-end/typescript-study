function sum(...nums: number[]) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

const result1 = sum(10, 20, 30);
console.log(result1);

const result2 = sum(10, 20, 30, 40);
console.log(result2);
