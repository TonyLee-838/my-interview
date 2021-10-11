function Parent() {
  this.name = "parent's name";
  this.age = 60;
}

function Child() {
  this.name = "child's name";
  this.age = 20;
}

//构造函数继承

function Child() {
  Parent.call(this);
  //对 child 传入的 this 进行操作
  //把 parent 的方法当作自己的方法
  //...
}

//原型链继承
const child = new Child();
Object.setPrototypeOf(child, new Parent());

//组合继承 === 构造函数 + 原型链

function Child() {
  Parent.call(this);
}

const child = new Child();
Object.setPrototypeOf(child, new Parent());

// 属性存在原型上 也存在本身对象上
