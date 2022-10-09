type NameType = {
  name: string
}

// 当this指向不明确时, TypeScript要求明确指定this的类型
function sayHello(this: NameType) {
  console.log(this.name);
}

const info = {
  name: "why",
  sayHello
}

info.sayHello();
