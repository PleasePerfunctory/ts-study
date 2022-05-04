// 泛型
/* 泛型指宽泛的类型 - 在定义时并不清楚具体的类型，只有在运行的时候才能知道是那个类型 */

// 泛型的基本用法
function log<T>(info: T): T {
  console.log('info:', info)
  return info
}

// 调用方式
log<string>('123') // 直接指定泛型的类型

log(232) // 通过ts类型推断自动推断类型


// 通过类型别名来创建泛型
type Log = <T>(info: T) => T
const myLog: Log = log

// 定义泛型接口
interface Log2 {
  <T>(info: T): T
}
const myLog2: Log2 = log

// 用泛型来约束接口其他的成员
interface Log3<T = string> {
  (info: T): T
}
const myLog3: Log3<number> = log
// ! 需要注意的是当泛型变量约束所有接口成员时，在使用接口的时候需要指定类型或者给予一个默认类型


// 泛型类
class Foo<T> {
  setValue(value: T): T {
    console.log(value)
    return value
  }
  // ! 静态成员不能应用泛型
  // static getValue(value: T) { 
  //   console.log(value)
  // }
}

const foo = new Foo<number>() // 实例化的时候可以传入类型参数
foo.setValue(12121)
const foo1 = new Foo() // 当类型参数省略时可以传入任意类型
foo1.setValue('232')


// 类型约束
interface Length {
  length: number
}

function data<T>(value: T): T {
  // console.log(value.length) // 此时ts就会抛出异常T中没有length属性
  return value
}

function data1<T extends Length>(value: T): T {
  console.log(value.length) // 这时类型约束起到了作用, 但是T不能为任意类型
  return value
}
