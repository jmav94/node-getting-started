function log(target, key, descriptor){
  console.log(`${key} was called`)
}

class Calculator{
  @log
  square(n: number){
    return n*n;
  }
}