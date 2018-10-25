// 观察者模式
function Subject() {
  this.observers = []
}

// 添加观察者
Subject.prototype.addObserver = function(observer) {
  this.observers.push(observer)
}

// 删除观察者
Subject.prototype.removeObserver = function(observer) {
  var index = this.observers.indexOf(observer)
  if(index > -1){
    this.observers.splice(index,1)
  }
}

// 通知观察者更新
Subject.prototype.notify = function() {
  this.observers.forEach(function(observer){
    observer.update()
  })
}

function Observer(name) {
  this.name = name
  this.update = function() {
    console.log(name + ' update...')
  }
}

// 创建主题
var subject = new Subject()

// 创建观察者1
var observer1 = new Observer('even')
// 添加观察者1
subject.addObserver(observer1)

// 创建观察者2
var observer2 = new Observer('yao')
// 添加观察者2
subject.addObserver(observer2)

// 通知所有观察者更新
subject.notify()
