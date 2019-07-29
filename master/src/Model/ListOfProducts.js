export default class ListOfProducts{
    constructor(){
        this.list = [];
    }

    addNewProduct = (task)=>{
        console.log(task);
        this.list = [...this.list, task]
    }

    editTask = task => {
        let idx = this.findTaskIndex(task.id);
        this.list[idx] = task;
    }

    deleteProduct = prod => {
        let idx = this.findProductIndex(prod.id);
        this.list.splice(idx, 1);
    }

    findTask = (id)=>{
        return this.list.find(o=>o.id === id);
    }

    findProductIndex = (id)=>{
        return this.list.findIndex(o=>o.id === id);
    }
}