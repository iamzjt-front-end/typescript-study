enum Status {
  MANAGER_AUDIT_FAIL = -1,
  NO_AUDIT = 0,
  MANAGER_AUDIT_SUCCESS = 1,
  FINAL_AUDIT_SUCCESS = 2
}

// 审核类
class MyAudit {
  getAuditStatus(status: number) {
    if (status === Status.NO_AUDIT) {
      console.log("没有审核");
    } else if (status === Status.MANAGER_AUDIT_SUCCESS) {
      console.log("经理审核通过");
    } else if (status === Status.FINAL_AUDIT_SUCCESS) {
      console.log("财务审核通过");
    }
  }
}

const audit = new MyAudit();
audit.getAuditStatus(Status.NO_AUDIT);

export {};

// - 使用常量带来的局限性
// - 方法参数不能定义成具体类型，只能初级使用 number、string 基本类型替代，降低了代码的可读性和可维护性
