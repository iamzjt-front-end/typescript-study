interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}

// 接口是支持多继承的（类不支持多继承）
interface IAction extends ISwim, IFly {

}

const action: IAction = {
  swimming() {

  },
  flying() {

  }
}
