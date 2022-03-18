const title = 'ES5\nSection 2 - Add / Remove properties'
console.log(title)

function Item(id, title) {
  this.id = id
  this.title = title
  this.show = function() {
    return "Item with id:" + id + " title:" + title
  }
  this.log = function() {
    console.log(this.show())
  }
}

var item = new Item(2, 'Second')
// item.log()
// console.log(item['title'])
var propUserAgent = 'os-browser'
item[propUserAgent] = 'brave browser'
console.log(item[propUserAgent])


console.log(item['title'])
delete item['title']
console.log(item['title'])
