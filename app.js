
// var Name = prompt("So Whats Your Name")

// var showName = document.getElementById("userName")

// Name = Name.toLowerCase()

// var first = Name.charAt(0).toUpperCase()

// var show = first + Name.slice(1)

// if(Name == ""){
//     showName.innerHTML = "My Boy"
// }
// else{
//     showName.innerHTML= show
// }
var todoList = document.getElementById("tasks")

todoList.value = ""

// function white(){
//     var backG = document.getElementById("bG")
    
//     backG.classList.toggle("whiteMode")
// }

function trigInput(){
    var enbInput = document.getElementById("enbInput")

    if(enbInput.classList[1]=="disable"){
        enbInput.classList.replace("disable" , "enable")
    }
    else{
        enbInput.classList.replace("enable" , "disable")
    }

}


function submit(){
    var  taskValue = document.getElementById("newTaskTxt")

    var li= document.createElement("li")

    li.innerHTML = taskValue.value + '<button onclick="complete(this)"><i class="fa-solid fa-check"></i></button><button onclick="dele(this)"><i class="fa-solid fa-trash-can"></i></button>'

    todoList.appendChild(li)

    taskValue.value = ""

    var enbInput = document.getElementById("enbInput")

    enbInput.classList.replace("enable" , "disable")

}

function complete(e){

    var comp = e.parentNode

    comp.classList.toggle("complete")

}

function dele(e){

 e.parentNode.remove()
  
}

// var deleAll = document.getElementById("delall")

// if(todoList.value = ""){
//     deleAll.classList.replace("enable" , "disable")
// }
// // else{
// //     deleAll.classList.replace("disable" ,"enable" )
// // }