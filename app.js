// var Name = prompt("So Whats Your Name")
// var showName = document.getElementById("userName")


// if(Name == ""){
//     showName.innerHTML = "My Boy"
// }
// else{
//     showName.innerHTML= Name
// }
var todoList = document.getElementById("tasks")

function white(){
    var backG = document.getElementById("bG")
    
    backG.classList.toggle("whiteMode")
}

function trigInput(){
    var enbInput = document.getElementById("enbInput")

    if(enbInput.classList[1]=="disable"){
        enbInput.classList.replace("disable" , "enable")
    }
    else{
        enbInput.classList.replace("enable" , "disable")
    }

}

var array = []
var valuES = array

function submit(){
    var  taskValue = document.getElementById("newTaskTxt")
    taskValue = taskValue.value

    array.push(taskValue)

    // console.log(array)

    valuES = array

    showTasks(valuES)

    return valuES ;

}

function showTasks(valuES){
    var newLi= ""
    valuES.forEach((element , index ) => {
        newLi += '<li><button onclick="complete('+index+')"><i class="fa-solid fa-check"></i></button><span class="taskTxt">' + element + '</span><button onclick="dele('+index+')"><i class="fa-solid fa-trash-can"></i></button></li>'  
    });
    todoList.innerHTML = newLi
}

function complete(num){

    var liComplete = todoList.getElementsByTagName("li")

    liComplete[num].classList.toggle("complete")    
}

// var lidele = todoList.getElementsByTagName("li") 
// function dele(num){

// lidele = document.getElementsByTagName("li") 

//  var newVa = lidele[num]

//  newVa = newVa.splice
 


  
// }
