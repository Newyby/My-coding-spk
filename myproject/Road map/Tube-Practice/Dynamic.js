/**const fib = (n, memo = {}) => {
  if(n in memo)return memo[n]
  if (n <= 2) return 1
memo[n] =  fib(n-1, memo) + fib(n-2, memo)
return memo[n]
}


console.log(fib(2))
console.log(fib(6))
console.log(fib(7))
**/
/**
const gridTravellers = (m, n, memo = {}) => {
const key = m + ',' + n
if(key in memo) return memo[key]
if(m === 1 && n === 1) return 1
if(m === 0 || n === 0) return 0
memo[key] = gridTravellers(m - 1, n, memo) + gridTravellers(m, n - 1, memo)
  return memo[key ]
}


console.log(gridTravellers(1,1))
console.log(gridTravellers(2,3))
console.log(gridTravellers(3,2))
console.log(gridTravellers(3,3))
//console.log(gridTravellers(18,18))

**/
/**
const canSum = (targetSum, numbers, memo = {}) => {
  if(targetSum in memo) return memo[targetSum]
  if(targetSum === 0) return true
  if(targetSum < 0) return false
  
  for(let num of numbers){
    const remainder = targetSum - num
  if(canSum(remainder, numbers, memo) === true){
    memo[targetSum ] = true
    return true 
  }
  }
  memo[targetSum ] = false

  return false
}











const howSum = (targetSum, numbers, memo = {}) => {
  if(targetSum in memo) return memo[targetSum]
  if(targetSum === 0) return []
  if(targetSum < 0) return null
  
  for(let num of numbers){
    const remainder = targetSum - num
  const remainderResult = howSum(remainder, numbers, memo)
  if(remainderResult !== null){
    memo[targetSum ] = [...remainderResult, num]
  return memo[targetSum]
  }
  }
  memo[targetSum ] = null

  return null
}





const bestSum = (targetSum, numbers, memo = {}) => {
  if(targetSum in memo) return memo[targetSum]
  if(targetSum === 0) return []
  if(targetSum < 0) return null
  
  let shortestCombination = null
  for(let num of numbers){
    const remainder = targetSum - num
  const remainderCombination = bestSum(remainder, numbers, memo)
  if(remainderCombination !== null){
    const combination = [...remainderCombination, num]
  if(shortestCombination === null || combination.length < shortestCombination.length ){
    shortestCombination = combination
  }
  }
  }
  memo[targetSum ] = shortestCombination 

  return shortestCombination 
}






console.log(bestSum(7, [2,3, 5]))
console.log(bestSum(7, [5,3,4,7]))
//console.log(canSum(7, [2,4]))
//console.log(canSum(7, [2,3,5]))

**/
//

/**
const canConstruct = (target, wordbank, memo = {}) => {
  if(target in memo)return memo[target]
  if(target === '') return true
  
  for(let word of wordbank){
    if(target.indexOf(word) === 0){
      const suffix = target.slice(word.length)
      if(canConstruct(suffix, wordbank, memo) === true){
       memo[target] = true
       return true
      }
    }
  }
  memo[target] = false
  return false
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))

console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))

**/

/**
const countConstruct = (target, wordbank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === '') return 1
  
  let totalCount = 0
  
  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const noOfWaysOfRest = countConstruct(target.slice(word.length), wordbank, memo)
totalCount += noOfWaysOfRest
    }
  }
  memo[target] = totalCount
  return totalCount
}

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))

console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))


**/

/**
const allConstruct = (target, wordbank, memo={}) => {
  if(target in memo) return memo[target]
  if(target === '') return [[]]
  
  const result = []
  
  for(let word of wordbank){
    if(target.indexOf(word) === 0){
const suffix = target.slice(word.length)
const suffixWays =  allConstruct(suffix, wordbank, memo)
const targetWays = suffixWays.map(way => [word, ...way])
result.push(...targetWays)
    }
  }
  memo[target] = result
  return result
}

console.log(allConstruct('purple', ['p', 'ur', 'le', 'purpl']))

**/

const fib = (n) => {
  const table = Array(n+1).fill(0)
  console.log(table)
  table[1] = 1
  for(let i = 0; i <= 0; i++){
 table[i + 1] = table[i]
 table[i + 2] = table[i]

  }
  return table[n]
}

console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
