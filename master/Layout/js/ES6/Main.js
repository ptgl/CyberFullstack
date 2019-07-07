var company = new Company();
company.addEmployee(new Employee("1a","hung","hung@mail.com","pass","1/1/2019","staff"));
company.addEmployee(new Employee("2b","hieu","hieu@mail.com","pass","1/1/2019","staff"));
company.addEmployee(new Employee("3c","hai","hai@mail.com","pass","1/1/2019","boss"));
company.addEmployee(new Employee("4d","hao","hao@mail.com","pass","1/1/2019","boss"));

showModal = (modal_title, readonly, type)=>{ //type 1: add, type 2: edit
    document.getElementById("header-title").innerHTML = modal_title;
    document.getElementById("msnv").readOnly = readonly;

    switch(type){
        case 1:
            document.getElementById("btnThemNV").style.display = "block";
            document.getElementById("btnCapNhatNV").style.display = "none";
        break;
        case 2:
            document.getElementById("btnThemNV").style.display = "none";
            document.getElementById("btnCapNhatNV").style.display = "block";
        break;
    }
}

clearForm = ()=>{
    let elements = document.getElementsByClassName("input-sm");
    for(let ele of elements){
        ele.value = ""
    }
    document.getElementById("position").selectedIndex = 0;
}

// show employee list
let currentPage = 1;
showList = (employeeList)=>{
    let tbody = document.getElementById("tableDanhSach");
    tbody.innerHTML = "";
    let numberOfEmployees = employeeList.length;
    let employee, tr, td;

    let ulPagination = document.getElementById("ulPhanTrang");
    ulPagination.innerHTML = "";
    let numberOfRows = 2;
    let numberOfPages = Math.ceil(numberOfEmployees/numberOfRows)

    for(let i = 1; i <= numberOfPages; i++){
        let li = document.createElement('li');
        ulPagination.appendChild(li);

        let a = document.createElement('a');
        a.setAttribute("class","page-link");
        a.setAttribute("id",`page_${i}`);
        a.innerHTML = i;
        li.appendChild(a);
        showPage(`page_${i}`);
    }

    let begin = (currentPage - 1)*numberOfRows;
    let end = currentPage*numberOfRows;

    if(numberOfEmployees < end){
        end = numberOfEmployees;
    }

    for(let i = begin; i < end; i++){
        employee = employeeList[i];
        
        tr = document.createElement("tr");
        tbody.appendChild(tr);

        for(let j = 0; j < employee.properties.length; j++){
            td = document.createElement("td");
            if(j == employee.properties.length-1){ //set selected position value
                td.innerHTML = employee.properties[j] === "" ? "" : (employee.properties[j] === "boss" ? "Sếp" : "Nhân viên thuòng");
            }else
                td.innerHTML = employee.properties[j];
            
            tr.appendChild(td);
        }

        // create edit and delete button
        td = document.createElement("td")
        let editBtn = `<a class="btn btn-primary text-white" id="edit_${employee._id}" data-toggle="modal" href="#myModal"><em class="fa fa-pencil"></em></a>`;
        let deleteBtn = `<a class="btn btn-danger text-white ml-2" id="delete_${employee._id}" ><em class="fa fa-trash"></em></a>`;
        td.innerHTML = editBtn + deleteBtn;
        td.setAttribute("align", "center");
        tr.appendChild(td);

        // add event
        editEmployee(`edit_${employee._id}`);
        deleteEmployee(`delete_${employee._id}`);
    }

}

//Add a new employee
document.getElementById("btnThem").addEventListener("click", ()=>{
    clearForm();
    showModal("Add a new employee", false, 1);
})

document.getElementById("btnThemNV").addEventListener("click", ()=>{
    let id = document.getElementById("msnv").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let startedAt = document.getElementById("datepicker").value;
    let position = document.getElementById("position").value;

    let newEmployee = new Employee(id, name, email, password, startedAt, position);
    company.addEmployee(newEmployee);

    swal("Add successfully!","The employee list was updated", "success" );
    showList(company.employeeList);
})

// Edit employee
document.getElementById("btnCapNhatNV").addEventListener("click",()=>{

    let id = document.getElementById("msnv").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let startedAt = document.getElementById("datepicker").value;
    let position = document.getElementById("position").value;

    let newEmployee = new Employee(id, name, email, password, startedAt, position);
    company.editEmployee(newEmployee);
    swal("Edit successfully!","The employee list was updated", "success" );
    showList(company.employeeList);
})

editEmployee = (idBtn)=>{
    document.getElementById(idBtn).addEventListener("click",()=>{
        let id = idBtn;
        let employeeId =idBtn.split('_')[1];

        let employee = company.findEmployee(employeeId);

        document.getElementById("msnv").value = employee._id;
        document.getElementById("name").value = employee.name;
        document.getElementById("email").value = employee.email;
        document.getElementById("password").value = employee.password;
        document.getElementById("datepicker").value = employee.startedAt;
        document.getElementById("position").value = employee.position;

        showModal("Edit the employee", true, 2)
    })
}

//Delete employee
deleteEmployee = (idBtn)=>{
    document.getElementById(idBtn).addEventListener("click",()=>{
        swal({
            title: "Are you sure you want to delete it?",
            text:" Data can't be recovered after being deleted!",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then((willDelete)=>{
            if(willDelete){
                let employeeId = idBtn.split('_')[1];
                company.deleteEmployee(employeeId);
                showList(company.employeeList);
                swal("Delete successfully",{icon: "success"})
            }else{
                swal("Data still be safe")
            }
        })
    })
}

// Search Employee by Name
document.getElementById("searchName").addEventListener("keyup",()=>{
    let key = document.getElementById("searchName").value;
    let list = company.findEmployeesByName(key);
    showList(list);
})

//sort employee 
document.getElementById("SapXepTang").addEventListener("click",()=>{
    document.getElementById("SapXepTang").style.display = "none";
    document.getElementById("SapXepGiam").style.display = "inline";
    company.sortEmployee(2);
    showList(company.employeeList);
})

document.getElementById("SapXepGiam").addEventListener("click",()=>{
    document.getElementById("SapXepTang").style.display = "inline";
    document.getElementById("SapXepGiam").style.display = "none";
    company.sortEmployee(1);
    showList(company.employeeList);
})

//pagination 
showPage = (idBtn)=>{
    document.getElementById(idBtn).addEventListener("click",()=>{
        currentPage = idBtn.split("_")[1]
        showList(company.employeeList);
    })
}

showList(company.employeeList);