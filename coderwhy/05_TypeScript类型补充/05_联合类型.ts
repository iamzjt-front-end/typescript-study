// 可能是number类型，也可能是string类型
function printID(id: number | string) {
  // 使用联合类型的值时，需要特别小心
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printID(11);
printID('abc');
