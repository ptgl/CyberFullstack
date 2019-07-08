export default class Task{

    constructor(id, name, desc, priority, status, labelArr, memberIdArr ){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.priority = priority;
        this.status = status;
        this.labelArr = labelArr;
        this.memberIdArr = memberIdArr;
    }
}