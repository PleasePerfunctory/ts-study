// ts中接口关键字 interface
interface Item { // 类型名称建议使用大驼峰命名规范
  label: string;
  code: number
}

// 使用interface定义的类型
const itemList: Array<Item> = [{ label: '数据库', code: 34 }]

// 还可以进行组合成新的类型
interface ItemList {
  list: Item[]
}

function getListData(options: ItemList): Item {
  return options.list[0]
}

const listData = {
  list: [
    {label: '数据', code: 0},
    { label: '多出一个属性', code: 3, age: 30 } // 这个被允许的并不会引起报错
    // ? 这是应为ts的鸭变形法：如果一只鸟长的像鸭子 叫声像鸭子 有鸭子的特征那么可以认为他就是一只鸭子
    // 返回到ts中只需要满足类型的必要条件则变异是可以通过的
  ]
}

getListData(listData)


// ! 但是如果传入的是一个字面量对象的话这种行为是不被允许的
getListData({
  list: [
    {label: '数据', code: 0},
    // { label: '多出一个属性', code: 3, age: 30 }
    { label: '多出一个属性', code: 3}
  ]
})

/**
 * * 总结：如果想绕过上面的类型检查可以使用：
 * * 1.讲一个对象赋值给一个变量
 * * 2.使用类型断言 as 和 <>
 * * 3.字符串索引签名 [x: string]: any
 * ? 索引签名只能是：number、string 和 symbol类型
 */

// 类型断言
getListData({
  list: [
    {label: '数据', code: 0},
    { label: '多出一个属性', code: 3, age: 30 }
  ]
} as ItemList)
// 或者
getListData(<ItemList>{
  list: [
    {label: '数据', code: 0},
    { label: '多出一个属性', code: 3, age: 30 }
  ]
})




