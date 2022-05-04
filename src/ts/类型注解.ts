const str: string = '字符串类型注解' // 字符串

const num: number = 232 // 数值型

const isNum: boolean = true // 布尔类型

const symbol: Symbol = Symbol('name') // Symbol类型

const undef: undefined = undefined // undefined - 只能赋值undefined

const nu: null = null // null

// undefined 和 null 是所有类型的子类型， 非严格模式可以复制给任何类型

// object类型
const obj: object = {} // object类型
const obj2: { name: string, age?: number } = { name: '对象' }
const obj3: { [key: symbol]: string } =  { [Symbol('name')]: '2323' } // 规定key的类型为symbol


// array类型
const arr: number[] = [23, 23]
const arr2: Array<string | number> = [232, 'abc']
const arr3: [boolean, number] = [false, 34]


// 函数类型
let fn: (x: number, y:number) => number // (参数和参数类型定义) => 返回类型
fn = (a, b) => a + b
fn(45, 23)

// void类型
const vo: void = undefined // void类型表示没有任何值的类型
// js中 void 0 = undefined
// undefined在js中不是系统关键字可以直接进行覆盖操作比如 var undefined = 'un'
// 所用确保结果是undefined  我们可以使用void

// any类型
let anyData: any = 'data'  // 表示不指定任何类型，可以随意更改类型
anyData = 232
anyData = {}


// never类型   
let error = () => { //never表示永远没有返回值的类型
  throw new Error('error')
}


