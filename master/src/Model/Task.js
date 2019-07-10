var randomId = require("random-id");

export default class Task{

    constructor(id, name, desc, priority, status, labelArr, memberIdArr ){
        this.id = id || randomId(5, "aA0");
        this.name = name;
        this.desc = desc;
        this.priority = priority || '1';
        this.status = status;
        this.labelArr = labelArr;
        this.memberIdArr = memberIdArr;
    }
}