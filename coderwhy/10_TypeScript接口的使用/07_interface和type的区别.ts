// interface定义多个重名接口会合并，不会覆盖
interface IFoo {
  name: string
}

interface IFoo {
  age: number
}

const foo: IFoo = {
  name: 'IamZJT',
  age: 18
}

// type定义的别名不能重复
// type IBar = {
//   name: string
// }
//
// type IBar = {
//   age: number
// }
