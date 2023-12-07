function expensive(n) {
  console.log('100$ 😱');
  return n + 4;
}

function createOptimizeExpensive(expensiveFunc: Function) {
  
  let values = new Map<number, number>();
   
  function optimizeExpensive(n: number) {
    if (values.has(n)) {
      console.log('Getting from cache')
      return values.get(n);
    } else {
      let value = expensiveFunc(n);
      values.set(n, value);
      return value;
    }
  }

  return {
    optimizeExpensive
  }
}

const optimizeCalc = createOptimizeExpensive(expensive);
optimizeCalc.optimizeExpensive(5);
optimizeCalc.optimizeExpensive(4);
optimizeCalc.optimizeExpensive(5);
