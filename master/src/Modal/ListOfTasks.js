export default class ListOfTasks{
    constructor(){
        this.list = [];
    }

    addNewTask = (task)=>{
        console.log(task);
        this.list = [...this.list, task]
    }

    findTask = (id)=>{
        return this.list.find(o=>o.id === id);
    }

    findTaskIndex = (id)=>{
        return this.list.findIndex(o=>o.id === id);
    }
}