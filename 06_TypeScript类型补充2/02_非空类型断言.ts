// message? -> undefined | string
function printMessageLength(message?: string) {
  console.log(message!.length);
}

printMessageLength('Hello World!');
printMessageLength('哈哈哈');