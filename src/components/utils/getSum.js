const SumNumbers = (str) => [...str].reduce((sum, char) => sum + +char, 0)

const getSum = (url) => {
  const splitStr = url.match(/\d/g)

  return SumNumbers(splitStr)
}

export default getSum
