import Boss from "./boss.js";
import Staff from "./staff.js";
import EmployeeList from "./employeeList.js";

const employees = new EmployeeList();

const addEmployee = function(){
    var id = document.getElementById("msnv").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var startedAt = document.getElementById("datepicker").value;
    var position = document.getElementById("position").value;

    switch(position){
        case "boss":
            var newEmployee = new Boss(id, name, email, password, startedAt, position);
            break;
        case "staff":
            var newEmployee = new Staff(id, name, email, password, startedAt, position);
            break;
        default:
            break;
    }

    employees.addEmployee(newEmployee);
    console.log(employees.employeeArr);
}

document.getElementById("btnThemNV").addEventListener("click", addEmployee);