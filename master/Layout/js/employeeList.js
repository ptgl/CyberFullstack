class EmployeeList {
    constructor(){
        this.employeeArr = [];
    }

    addEmployee(employee){
        this.employeeArr.push(employee);
    }

    deleteEmployee(id){
        var found = this.employeeArr.findIndex(x => x._id === id);
        // for(var i = 0; i < this.employeeArr.length; i++){
        //     if(this.employeeArr[i]._id === id){
        //         found = i;
        //         break;
        //     }
        // }

        if(found !== -1){
            this.employeeArr.splice(found, 1);
        }else{
            alert("Not found!");
        }
    }
}

export default EmployeeList;
//IPO model (input-output-process)