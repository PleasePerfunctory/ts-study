// ts中的类基本实现
class Dog {
  constructor(name: string) {
    this.name = name
    this.age = 2 // 属性必须要定义类型且指定初始值
  }
  age: number
  name: string // 定义属性类型
  readonly color: string = 'red' // 只读成员
  run() {} // 定义方法
}


// 类的继承
class husky extends Dog {
  constructor (name: string, color: string) {
    super(name) // ts中派生类必须有super()
    this.color = color
  }
  color: string
}


// 类的修饰符
/**
 * public - 默认
 * private - 私有成员，只能在类中调用，实例和子类中无法调用，给constructor加private时当前能既不能被实例化也不能被继承
 * protected - 受保护成员，只能在类或者子类中被访问，而不能在类的实例中访问，如果给constructor加上那么这个能不能被实例化只能被继承，所以这个类只能被当作基类
 * readonly - 只读成员，只能被访问不能被修改
 * static - 静态成员，只能通过类名类调用，类的静态成员可以被继承
 */

// 抽象类 - 通过abstract关键字创建， 这是ts对js的衍生
abstract class Animal {
  constructor(public data: Array<string>) {
    this.data = data
  }
  abstract go(): void // 抽象方法需要在子类中实现
}

// const aniaml = new Animal() // 无法实例化


class AnimalItem extends Animal {
  constructor(name: string) {
    super([name])
  }
  go() {}
}
const animalItem = new AnimalItem('animalItem')

// 类的多态
class Cat extends Animal {
  go() {
    console.log('this is cat')
  }
}

const cat = new Cat(['cat'])

const animals: Animal[] = [animalItem, cat]
animals.forEach(item => item.go()) // 不同的实例执行的结果不同 - 多态


// 链式调用
class WorkFlow {
  step1 () {
    console.log('step1 -> this', this)
    return this
  }
  step2() {
    console.log('step2 -> this', this)
    return this
  }
}

// new WorkFlow().step1().step2()


class Myflow extends WorkFlow{
  next() {
    console.log('next -> this', this)
    return this;
  }
}


new Myflow().next().step1().next().step2()



/* 类和接口的关系 */
/**
 * 用接口类约束类成员有哪些属性和类型
 * 用implements关键字来实现这个接口
 * 类在实现的时候必须实现接口中所有属性和方法的定义, 可以声明其他属性和类型如：color
 * 接口只能约束类的公有成员，也不能约束构造函数。
 */
interface Human {
   name: string;
   age: number
   eat(): void;
}

class Xpp implements Human {
   constructor() {
    this.name = '项盼盼';
    this.age = 18
    this.color = '黄色'
   }
   color: string
   name: string
   age: number
   eat() {}
}


// 接口的继承
/* 接口和类一样可以实现继承，并且一个接口可以继承多个接口 */
/* 接口的继承可以抽离可充用的接口，也可以合并多个接口 */
interface Man extends Human { // 单个接口的继承
  run(): void
}


interface Child {
  cry(): void
}


interface Boy extends Man, Child {}

let boy: Boy = {
  name: '冯建军',
  age: 18,
  eat: () => {},
  run() {},
  cry() {}
}


// 接口继承类
/* 接口继承类意思就是把类的成员抽象出来，只有类的结构没有类的具体实现 */

class Auto { // 定义一个auto类
  state = 1
  // private name: string = 'fjj'
}

// 定义一个接口继承于Auto类
interface AutoInterface extends Auto {

}

// 定义一个接口实现类：其中只需要有Auto类的属性成员，state
class C implements AutoInterface { // 这里C不是Auto的子类所以不能包含Auto的非公有成员
  state = 2;
}


/* 接口在抽离类的成员时，不仅抽离的公共成员，还抽离的私用成员和受保护的成员 */
class Bus extends Auto implements AutoInterface {
// 继承于auto所有不必实现state属性
}
