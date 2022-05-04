# typescript的数据类型

> 类型注解： 变量:数据类型 = 变量值

> 联合类型：用｜来链接多个类型组成一个新的类型 <span style="color: #bc3030">const a: string | number = 2323</span>
## 原始类型
```typescript
  // 数值型
  const count: number = 45.23

  // 字符串类型
  const name: string = '我是string类型'

  // 布尔类型
  const isEl: boolean = true

  // symbol类型
  const syName: symbol = Symbol('name')

  // undefined类型
  const un: undefined = undefined

  // null类型
  const nu: null = null
```
> <span style="color: #FF7F50">注意：undefined 和 null 是所有类型的子类型， 非严格模式可以复制给任何类型</span>

<br>
## 其他类型

```typescript

  // 对象类型
  const obj: object = {} // 限制比较宽泛, 但是设置熟悉时会报错应为没有值得他具体有哪些属性值
  // obj.name = '小贱' 报错
  const obj2: { name: string, age?: number } = { name: '呵呵' } // 限制强
  // 限制对象或者数组key的类型
  const obj3: { [key: symbol]: number } = {
    [Symbol('num')]: 100
  }



  // 数据类型
  const arr: sting[] = ['23', 'haode']
  const arr2: Array<number | string> = ['name', 34] // 采用泛型定义数组类型
  const arr3: [boolean, symbol, number] = [true, Symbol(), 232] // 元祖类型：固定的长度和固定的类型


  // 函数类型

  // 定义函数参数类型和返回值类型，默认void表示没有返回值
  let fn = (x: number, y: string): string
  fn = (a, b) => a + b
  fn(18, '禁')


  // void 类型
  let voFn = (x: string, y: string): void // 没有返回值的函数默认返回void类型


  // any类型
  let anyData: any = 'data'  // 表示不指定任何类型，可以随意更改类型
  anyData = 232
  anyData = {}


  // never类型   
  let error = () => { //never表示永远没有返回值的类型
    throw new Error('error')
  }
```
> <span style="color: #FF7F50">注意：<br>js中 void 0 = undefined
  <br>
   undefined在js中不是系统关键字可以直接进行覆盖操作比如 var undefined = 'un'
  <br>
  所用确保结果是undefined  我们可以使用void
</span>
