callModal = (modal_title, readonly, type)=>{ //type 1: add, type 2: edit
    document.getElementById("header-title").innerHTML = modal_title;
    document.getElementById("msnv").readonly = readonly;

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