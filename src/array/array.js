//const array = ['Kennedy', 'Karen','Oscar'];

class MyArray {
    constructor(){
        this.length = 0; // conteo del array
        this.data = {} // datos /elementos del array
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
}

const myArray = new MyArray();