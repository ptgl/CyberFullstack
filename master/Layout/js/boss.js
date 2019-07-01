import {Employee} from "./employee.js";

class Boss extends Employee {
    constructor(_id, name, email, password, startedAt, position){
        super(_id, name, email, password, startedAt, position);
    }

    calcSalary(){
        return 3000;
    }
}

export default Boss;