function expensive(n) {
  console.log('100$ 😱');
  return n + 4;
}

class OptimizeExpensiveWrapper {
  
  private values = new Map<number, number>();

  constructor(private expensiveFunc: Function){}

  optimizeExpensive(n: number) {
    if (this.values.has(n)) {
      console.log('Getting from cache')
      return this.values.get(n);
    } else {
      let value = this.expensiveFunc(n);
      this.values.set(n, value);
      return value;
    }
  }

}

const optimizeCalc = new OptimizeExpensiveWrapper(expensive);
optimizeCalc.optimizeExpensive(5);
optimizeCalc.optimizeExpensive(4);
optimizeCalc.optimizeExpensive(5);
