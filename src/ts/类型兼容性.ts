// 类型兼容型
/**
 * X 兼容 Y： X（目标类型） = Y（源类型）
 * 在config.json中关闭 strictNullChecks
 * 即任何类型都与null兼容：如一下例子
 */

let s: string = '123'
s = null // null为所有类型的子类型


// 接口兼容性
interface X {
  a: any;
  b: any;
}

interface Y {
  a: any;
  b: any;
  c: any;
}

let x: X = { a: 1, b: 2 }
let y: Y = { a: 1, b: 2, c: 3 }

x = y

// y = x 成员少的兼容成员多的
/* 一个接口成员包含另一个接口的所用成员，则这个接口可以作为源类型赋值给目标类型 */


// 函数兼容性
