// * never 类型，表示什么都没有，达不到的类型

// * dataFlowAnalysisWithNever 方法穷尽了 DataFlow 的所有可能类型
// * 使用 never 避免出现未来拓展新的类没有对应类型的实现，目的就是写出类型绝对安全的代码
type DataFlow = string | number;

function dataFlowAnalysisWithNever(dataFlow: DataFlow) {
  // - 这里 dataFlow 被限制成 DataFlow 类型，string | number
  if (typeof dataFlow === "string") {
    console.log(`${ dataFlow }是字符串类型！`);
  } else if (typeof dataFlow === "number") {
    console.log(`${ dataFlow }是数字类型！`);
  } else {
    let data = dataFlow;

    // ! 可以看到：此时 dataFLow 给我们呈现出来的已经是一个 never 类型
    // + 而这里是未来的某一个数据类型预留出来的区间
    // + 此时由于已经前面穷举了所有可能的类型，这里就会面临一个没有类型的情况
    // * 而当以后有一天我们给 DataFlow 加了一个 boolean 类型时，这里将会被自动推断成 boolean 类型
  }
}

dataFlowAnalysisWithNever("免税店");
dataFlowAnalysisWithNever(3);
// dataFlowAnalysisWithNever(true);
