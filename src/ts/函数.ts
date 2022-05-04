// 函数定义

function fn1(x: string, y: number) {
  return x + y
}

let fn2: (x: string, y: number) => void

type fn3 = (x: string, y: number) => string

interface fn4 {
  (x: string, y: string): void
}

// 定义混合类型接口
interface Lib {
  (x: string): string
  name: string
  getMessage(): void
}

// 实现方法
const lib: Lib = (x) => {
  return ''
}
lib.name = '混合类型接口'
lib.getMessage = () => {}

// 函数剩余参数
function getPersonnelInfo(name: string, ...params: string[]): string {
  console.log(params)
  return name
}

getPersonnelInfo('冯小贱', '23')

// 函数重载
function fnName(name: Array<string>): 'string'
function fnName(name: Array<number>): 'number'
function fnName(name: Array<boolean>): 'boolean'
function fnName(name: any[]) {
  const item = name[0]
  if (typeof item === 'string') {
    return 'string'
  } else if (typeof item === 'number') {
    return 'number'
  } else {
    return 'boolean'
  }
}