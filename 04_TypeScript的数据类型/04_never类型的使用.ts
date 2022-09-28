function foo(): never {
  // 死循环
  while (true) {

  }
}

function bar(): never {
  throw new Error()
}


function handleMessage(message : string | number) {
  switch (typeof message) {
    case 'string':
      console.log('字符串');
      break;
    case 'number':
      console.log('数字');
      break;
    default:
      let msg: never = message;
  }
}

export {}
