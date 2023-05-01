// 通过类型别名(type)去声明对象类型
// type InfoType = {
//   name: string,
//   age?: number
// }

// 另一种方式声明对象类型: 接口interface
// 可以定义可选属性
// 也可以定义只读属性
interface IInfoType {
  readonly name: string;
  age: number;
  friend?: {
    name: string
    age: number
  };
}

const info: IInfoType = {
  name: 'IamZJT',
  age: 18,
  friend: {
    name: 'coderwhy',
    age: 20,
  },
};

console.log(info.friend?.name);

// info.name = '';
info.age = 0;