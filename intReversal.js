const reverseInt = (num) => {
  const reversedInt = num.toString().split('').reverse().join('')
  const number = parseInt(reversedInt) * Math.sign(num)
  return number
}

console.log(reverseInt(2345))