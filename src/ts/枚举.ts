enum NumType {
  age,
  num,
  count,
  width,
  height
}

// 反性映射
interface Enum{
  [key: string | number]: string | number
}
let enumData: Enum = {};
(function (enumData) {
  enumData[enumData['name'] = 1] = 'name'
  enumData[enumData['age'] = 2] = 'age'
  enumData[enumData['width'] = 3] = 'width'
})(enumData)
console.log(enumData)


