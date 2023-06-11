// * 1. 枚举的定义
// - 用来存放一组固定的常量的序列

// * 2. 枚举的分类

// 字符串枚举
enum Status {
  MANAGER_AUDIT_FAIL = "项目经理审核失败",
  NO_AUDIT = "没有审核",
  MANAGER_AUDIT_SUCCESS = "项目经理审核成功",
  FINAL_AUDIT_SUCCESS = "财务审核成功"
}

// 数字枚举
// 给定第一项的值，后面的值会自动递增
enum Week {
  MONDAY = 1,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY
}

console.log(Week.MONDAY); // 1
console.log(Week["MONDAY"]); // 1

console.log(Week[1]); // MONDAY
console.log(Week[2]); // TUESDAY

// * 可以反向通过 value 取到前面的 key
// ! 可以推断出：数字枚举具有双重映射

export {};
