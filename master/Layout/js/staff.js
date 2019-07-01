import {Employee} from "./employee.js";

class Staff extends Employee {
    constructor(_id = '', name = '', email = '', password = '', startedAt = '', position = ''){
        super(_id, name, email, password, startedAt, position);
    }

    calcSalary(){
        return 1000;
    }
}
// var newStaff = new Staff(1,"linh","mail@mail.com","pass123","1/1/2019","sep");
// console.log(newStaff);
export default Staff;