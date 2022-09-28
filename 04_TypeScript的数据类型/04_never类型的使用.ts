function foo(): never {
  // 死循环
  while (true) {

  }
}

function bar(): never {
  throw new Error()
}


function handleMessage(message : string | number) {
// function handleMessage(message : string | number | boolean) {
  switch (typeof message) {
    case 'string':
      console.log('字符串');
      break;
    case 'number':
      console.log('数字');
      break;
    default:
      // 形参不加类型，永远不可能到此，所以编译不会报错。
      // 如果加了类型，但是煤堆此类型进行处理，编译过程中就会报错。
      let msg: never = message;
  }
}

export {}
