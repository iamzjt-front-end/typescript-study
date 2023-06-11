// - 1. 数字枚举底层
// - 数字枚举可以反向映射的由来
var Week;
(function (Week) {
  Week[Week["MONDAY"] = 1] = "MONDAY";
  Week[Week["TUESDAY"] = 2] = "TUESDAY";
  Week[Week["WEDNESDAY"] = 3] = "WEDNESDAY";
  Week[Week["THURSDAY"] = 4] = "THURSDAY";
  Week[Week["FRIDAY"] = 5] = "FRIDAY";
  Week[Week["SATURDAY"] = 6] = "SATURDAY";
  Week[Week["SUNDAY"] = 7] = "SUNDAY";
})(Week || (Week = {}));

// - 2. 字符串枚举底层
var Status;
(function (Status) {
  Status["MANAGER_AUDIT_FAIL"] = "\u9879\u76EE\u7ECF\u7406\u5BA1\u6838\u5931\u8D25";
  Status["NO_AUDIT"] = "\u6CA1\u6709\u5BA1\u6838";
  Status["MANAGER_AUDIT_SUCCESS"] = "\u9879\u76EE\u7ECF\u7406\u5BA1\u6838\u6210\u529F";
  Status["FINAL_AUDIT_SUCCESS"] = "\u8D22\u52A1\u5BA1\u6838\u6210\u529F";
})(Status || (Status = {}));
