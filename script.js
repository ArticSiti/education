// class Animals {
//     constructor(options){
//         this.name = options.name
//         this.age = options.age
//         this.count = options.count
//     }

//     voice(){
//         console.log('Hello')
//     }
// }

// // const animal = new Animals({
// //     name: 'Jon',
// //     age: 'Jon',
// //     count: 'Jon'
// // })

// class Cat extends Animals {
//     constructor(options){
//         super(options)
//         this.color = options.color
//     }
//     voice(){
//         super.voice()
//         console.log('Hello world')
//     }
// }
// const cat = new Cat({
//     name: 'Jon',
//     age: 1,
//     count: 50,
//     color: 'red'
// })

class TreeStore {
  constructor(items) {
    this.items = items;
  }
  getAll() {
    console.log(this.items);
  }

  getItems(id) {
    for (let itemsArray = 0; itemsArray < items.length; itemsArray++)
      id = items[itemsArray];
    console.log(id);
  }
  getChildren(id) {
    items.sort()
  }
}

const items = [
  { id: 1, parent: "root" },
  { id: 2, parent: 1, type: "test" },
  { id: 3, parent: 1, type: "test" },

  { id: 4, parent: 2, type: "test" },
  { id: 5, parent: 2, type: "test" },
  { id: 6, parent: 2, type: "test" },

  { id: 7, parent: 4, type: null },
  { id: 8, parent: 4, type: null },
];
const ts = new TreeStore(items);
ts.getAll();
ts.getItems(4);
ts.getChildren();
