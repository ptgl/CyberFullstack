export default class ListOfTasks{
    constructor(){
        this.list = [];
    }

    addNewTask = (task)=>{
        console.log(task);
        this.list = [...this.list, task]
    }

    editTask = task => {
        let idx = this.findTaskIndex(task.id);
        this.list[idx] = task;
    }

    deleteTask = task => {
        let idx = this.findTaskIndex(task.id);
        this.list.splice(idx, 1);
    }

    findTask = (id)=>{
        return this.list.find(o=>o.id === id);
    }

    findTaskIndex = (id)=>{
        return this.list.findIndex(o=>o.id === id);
    }
}