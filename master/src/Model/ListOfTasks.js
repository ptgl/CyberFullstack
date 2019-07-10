export default class ListOfTasks{
    constructor(){
        this.list = [];
    }

    addNewTask = (task)=>{
        console.log(task);
        this.list = [...this.list, task]
    }

    editTask = task => {
        let idx = this.list.findIndex(o=>o.id === task.id);
        this.list[idx] = task;
    }

    findTask = (id)=>{
        return this.list.find(o=>o.id === id);
    }

    findTaskIndex = (id)=>{
        return this.list.findIndex(o=>o.id === id);
    }
}