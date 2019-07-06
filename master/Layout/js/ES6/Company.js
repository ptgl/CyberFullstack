class Company{
    constructor(){
        this.employeeList = new Array();
    }

    addEmployee(newEmployee){
        this.employeeList = [...this.employeeList, newEmployee];
    }

    // return position of employee in employeeList
    findById(id){
        for(let pos in this.employeeList){
            if(this.employeeList[pos]._id === id)
                return pos;
        }
        return -1;
    }

    findEmployee(id){
        for(let e of this.employeeList){
            if(e._id === id)
                return e;
        }
    }

    deleteEmployee(id){
        var found = this.employeeList.findIndex(x => x._id === id);

        if(found !== -1){
            this.employeeList.splice(found, 1);
        }else{
            alert("Not found!");
        }
    }

    editEmployee(employee){
        var pos = this.findById(employee._id);
        if(pos != -1)
            this.employeeList[pos] = employee;
        else
            alert("Can't edit")
    }

    
    findEmployeesByName(name){
        let result = [];
        for(let emp of this.employeeList){
            if(emp.name.trim().toLowerCase().search(name) !== -1)
                result = [...result, emp];
        }
        return result;
    }

    sortEmployee(type){
        let less, greater;
        if(type === 1){//ascending
            less = -1;
            greater = 1;
        }else{//descending
            less = 1;
            greater = -1;
        }
        this.employeeList.sort((a,b)=>{
            let x = a._id.toLowerCase();
            let y = b._id.toLowerCase();
            if(x < y) return less;
            if(x > y) return greater;
            return 0;
        })
    }
}