class DynamicArray {

  constructor(defaultSize=4) {
    this.capacity=defaultSize
    this.length=0
    this.data= new Array(defaultSize)

  }

  read(index) {
    return this.data[index]
  }

  unshift(val) {
    this.data = [val,...this.data.slice()]
    this.length++
  }

}


module.exports = DynamicArray;
