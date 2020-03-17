# ES新语法

解释项目中经常使用的新语法，方便略懂js的其他语言者能读懂代码，多栈开发。

## let与const

- let: 替代var关键字
- const: 常量，不允许修改

特点1：块级作用域

```js
{
	let a = 10;
	console.log(a); // 10
}
console.log(a);  // ReferenceError
```

特点2：不能在声明前访问

```js
let a = 10;
{
	console.log(a);  // ReferenceError
	let a = 20;
}
```

特点3：不会挂载在window

```js
let a 10;
console.log(a); // 10
console.log(window.a); // undefined
```

## 解构赋值

> 按照一定的模式，从数组和对象中提取值，然后对变量进行赋值。

### 数组解构

- 完全解构

```javascript
let arr = [10, 20, 30];
let [ a, b, c ] = arr;
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
```

- 部分解构

```javascript
let [ a, , c ] = [10, 20, 30];
console.log(a); // 10
console.log(c); // 30
```

- 默认值

```javascript
let [ a = 'aa', b = 'bb' ] = [10];
console.log(a); // 10
console.log(b); // bb
```

### 对象解构

- 完全解构

```javascript
let { a, b, c } = { a: 10, b: 20, c: 30 };
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
```

- 部分解构

```javascript
let { a, c } = { a: 10, b: 20, c: 30 };
console.log(a); // 10
console.log(c); // 30
```

- 默认值

```javascript
let { a = 'aa', b = 'bb' } = { a: 10 };
console.log(a); // 10
console.log(b); // bb
```

- 变量名替换

```javascript
let { a: myA } = { a: 10 };
console.log(myA); // 10
console.log(a); // ReferenceError
```

### 数组对象复合

- 深层解构1

```javascript
let { b: [ b1, b2 ], c: { c1, c2 } } = { a: 10, b: [20, 21], c: { c1: 30, c2: 31 } };
console.log(b); // RefrenceError
console.log(b1); // 20
console.log(b2); // 21
console.log(c); // RefrenceError
console.log(c1); // 30
console.log(c2); // 31
```

- 深层解构2

```javascript
// 对象深层解构时前面的引导符不算变量，如有需要，需单独解构
let { c, c: { c1, c2 } } = { a: 10, b: [20, 21], c: { c1: 30, c2: 31 } };
console.log(c); // { c1: 30, c2: 31 }
console.log(c1); // 30
console.log(c2); // 31
```

### 常见使用场景

- 变量交换

```javascript
let a = 10, b = 20, c = 30;
[a, b, c] = [ b, c, a ];
console.log(a, b, c);
```

- 接口数据提取

```javascript
let ajaxResponseData = {
	code: 200,
	msg: '成功',
	result: {
		name: '车',
		info: '各种车',
		list: ['兰博基尼', '法拉利']
	}
};
let { result: { info, list } } = ajaxResponseData;
console.log(info);
console.log(list);
```

## 模板字符串

- 换行支持

```js
let str = `第一行第一行
	第二行第二行`;
console.log(str);
```

- 替代变量拼接

```js
const a = 10;
const b = 20;
console.log(`${a}+${b}=${a+b}`);
```

```js
// 可以访问变量、调用函数、及各种表达式运算
var mei = {
	name: '小美',
	age: 16
};
let str = `${ mei.name }今年${ mei.age }了，
	还有${ 30 - mei.age }年他就30了`;
console.log(str);
```

## ...运算符

### 合并多值

- 用于形参定义 - 可获取剩余参数为数组

```javascript
function fn(a, ...s) {
	console.log(s);
}
fn(1, 2, 3, 4, 5, 6);
```

- 用于数组解构赋值 - 可用1个变量获取数组剩余值

```javascript
let arr = [ 11, 22, 33, 44 ];
let [ a, ...b ] = arr;
console.log(a, b);  // 11, [ 22, 33, 44 ]
```

### 展开取值

- 用于函数调用 - 可解开数组依次传递(替代apply)

```javascript
let nums = [55, 33, 66, 11];
console.log(Math.min(...nums)) // 11
console.log(Math.min.apply(null, nums)) // 11
```

- 用于多数组合并

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
let arr4 = [ ...arr1, ...arr2, ...arr3 ];
console.log(arr4);
```

## 函数

### 函数形参的定义

- 默认值

具有默认值的形参最好定义在后面

```javascript
function fn(a = 10, b = 20) {
	console.log(a + b);
}
fn();
fn(100);
fn(100, 200);
```

- 参数解构赋值

```javascript
function fn({a, b}) {
	console.log(a + b);
}
fn({a: 11, b: 22});
```

### 箭头函数

- 简述：
    + 使用=>定义函数。
- 特点：
    + this固定指向上级this，不再和调用方式有关
    + 不能作为构造函数使用
    + 不能使用arguments，可使用...语法代替
- 语法：
   + 形参 => 代码体

- 基本用法

```javascript
let add = (a, b) => {
	return a + b;
};
console.log(add(11, 22));
```

- 一个形参可省略小括号

```javascript
let add = a => {
	return a + 22;
};
console.log(add(11));
```

- 一句代码可省略大括号，并自动return执行结果

```javascript
let add = a => a + 22;
add(11);
```

- 使用例子

```javascript
let arr = [ 1, 2, 3, 4 ];
let newArr = arr.map(v => v * v);
console.log(newArr);
```

- this固定指向上级this

```javascript
function Tab() {
	this.tabBtn = document;
	this.tabBox = document.body;
}
Tab.prototype = {
	on: function() {
		this.tabBtn.onclick = () => {
			console.log(this);
			this.tabBox.style.backgroundColor = 'blue';
		};
	}
};
new Tab().on();
```

- 不能作为构造函数使用

```javascript
let Person = (name, age) => {
	this.name = name;
	this.age = age;
};
let p = new Person();
```

## 对象

#### 属性方法简洁表示

- 引用变量定义属性方法

```javascript
let a = 10;
let b = 20;
let fn = function(){};
let obj = { a, b, fn };
console.log(obj);
```

#### 属性名支持表达式

- 引用变量值

```javascript
let key = 'name';
let obj = {
	[ key ]: '小美';
};
console.log(obj);
```

- 表达式计算值

```javascript
let key = 'name';
let obj = {
	[ 'my' + key ]: '小美',
};
console.log(obj);
```

## class类

- 简述：
    + 提供了与传统面向对象语言相似的写法，减少其他程序员的学习门槛。
    + 在功能上相比es5基本没有什么区别。
- 特点：
    + 只能配合new关键字创建实例
    + 类名不会预解析
    + 类原型上的属性名可以使用表达式
    + 类原型上的属性默认是不可枚举的

#### 语法

- 类的定义

```javascript
class Person {

	constructor(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	};

	say() {
		console.log(`${ this.name }今年${ this.age }岁了`);
	};

};
var xiaoming = new Person('小明', 14, '男');
xiaoming.say();
```

- 静态方法

```javascript
class Person {

	constructor() {
		Person.total++ ||  (Person.total = 1);
	};

	// 统计总人口
	static getTotal() {
		return Person.total;
	};

};
var p1 = new Person;
var p2 = new Person;
console.log(Person.getTotal()); // 2
```

- 继承1 - 子类实例使用父类实例的属性方法

```javascript
class Animal {

	constructor(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	};

	eat() {
		console.log('都得吃啊！');
	};

};

class Person extends Animal {

	constructor(name, age, gender) {
		super(name, age, gender);
	};

	say() {
		console.log(`${ this.name }今年${ this.age }岁了`);
	};

};
var xiaoming = new Person('小明', 14, '男');
xiaoming.eat();
xiaoming.say();
```

- 继承2 - 子类使用父类的静态方法

```javascript
class Animal {

	static test() {
		console.log('来自父类的静态方法');
	};

};
class Person extends Animal {};
Person.test();
```

#### 本质

- 类本质上是一个函数
```javascript
class Person {};
console.log(typeof Person); // function
```

- 类中的实例方法都定义在了原型中
```javascript
class Person {
	eat() {
		console.log('吃吃吃');
	};
};
console.log(Person.prototype);
```

- 类中的静态方法都定义在了自身
```javascript
class Person {
	static getTotal() {
		console.log('70亿');
	};
};
console.dir(Person);
```

- 实例继承原理（子类原型继承父类原型）

```javascript
class Animal {
	eat() {
		console.log('都得吃啊！');
	};
};

// 子类原型 ==> Animal.prototype ==> Object.prototype ==> null
class Person extends Animal {};
console.log(Person.prototype.__proto__ === Animal.prototype); // true

// 实例 ==> Person.prototype ==> Animal.prototype ==> Object.prototype ==> null
var xiaomei = new Person();
console.log(xiaomei.__proto__ === Person.prototype);  // true
console.log(xiaomei.__proto__.__proto__ === Animal.prototype); // true
console.log(xiaomei.__proto__.__proto__.__proto__ === Object.prototype); // true
```

- 类继承原理 （子类继承父类）

```javascript
class Animal {
	static getTotal() {
		console.log('全部有多少');
	};
};

// 子类 ==> Animal ==> Function.prototype ==> Object.prototype ==> null
class Person extends Animal {};
console.log(Person.__proto__ === Animal);  // true
console.log(Person.__proto__.__proto__ === Function.prototype); // true
console.log(Person.__proto__.__proto__.__proto__ === Object.prototype); // true
```
