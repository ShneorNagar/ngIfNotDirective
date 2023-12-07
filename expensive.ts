function createOptimizeExpensive() {
  
  let values = new Map<number, number>();
  
  function expensive(n) {
    console.log('100$ 😱');
    return n + 4;
  }
  
  
  function optimizeExpensive(n: number) {
    if (values.has(n)) {
      console.log('Getting from cache')
      return values.get(n);
    } else {
      let value = expensive(n);
      values.set(n, value);
      return value;
    }
  }

  return {
    optimizeExpensive
  }
}

const optimizeCalc = createOptimizeExpensive();
optimizeCalc.optimizeExpensive(5);
optimizeCalc.optimizeExpensive(4);
optimizeCalc.optimizeExpensive(5);
