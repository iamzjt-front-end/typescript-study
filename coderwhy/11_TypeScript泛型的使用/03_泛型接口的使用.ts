interface IPerson<T1, T2> {
  name: T1,
  age: T2
}

const p: IPerson<string, number> = {
  name: 'IamZJT',
  age: 18
};
