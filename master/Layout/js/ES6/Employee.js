// 1. export dinh danh -> import { Employee, a, b} from ...
 class Employee{
    constructor(_id, name, email, password, startedAt, position){
        this._id = _id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.startedAt = startedAt;
        this.position = position;

        this.properties = [this._id, this.name, this.email, this.password, this.startedAt, this.position];
    }
}

// 2. export default
// only 1 export default in a file 
// export default Employee; -> import anyName from ...
