var data = {
  name: 'evenyao',
  list: [1, 2, 3]
}
observe(data)

// data.name  
// data.name = "Hello"
// data.list[0] = 100
// data.list

function observe(data) {
  if(!data || typeof data !== 'object') return
  for(let key in data) {
    let val = data[key]
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get: function() {
        console.log(`get ${val}`)
        return val
      },
      set: function(newVal) {
        console.log(`changes happen: ${val} => ${newVal}`)
        val = newVal
      }
    })
    // 如果 val 也为对象 递归
    if(typeof val === 'object') {
      observe(val)
    }
  }
}
