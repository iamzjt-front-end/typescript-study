// type CalcFn = (num1: number, num2: number) => number
interface CalcFn {
  (num1: number, num2: number): number;
}

function calc(num1: number, num2: number, calcFn: CalcFn) {
  return calcFn(num1, num2);
}

const add: CalcFn = (num1, num2) => {
  return num1 + num2;
};

calc(20, 30, add);