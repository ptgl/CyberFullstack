 class Employee{
    constructor(_id, name, email, password, startedAt, position){
        this._id = _id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.startedAt = startedAt;
        this.position = position;

        this.properties = [this._id, this.name, this.email, this.startedAt, this.position];
    }
}
