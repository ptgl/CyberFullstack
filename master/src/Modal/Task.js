export default class Task{

    constructor(id, name, labelArr, status, desc, memberIdArr, priority){
        this.id = id;
        this.name = name;
        this.labelArr = labelArr;
        this.status = status;
        this.desc = desc;
        this.priority = priority;
        this.memberIdArr = memberIdArr;
    }
}