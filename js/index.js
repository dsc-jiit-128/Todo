function FetchTodo(todo) {
    var div = document.createElement('div')
    div.className = "todo"
    var innerhtml =""
    innerhtml += `<input type="radio" class="toggleBtn">`
    innerhtml += `${todo.title}<a><i class="fa fa-trash trash"></i></a>`
    div.innerHTML = innerhtml
    var todoWrapper = document.getElementsByClassName('todo-wrapper')[0]
    todoWrapper.append(div)
}

function addTodo(event) {
    var todoData = document.getElementById('todoInput').value
    if(todoData.trim() != "") {
        var todo = {
            uuid:"23",
            title:todoData,
            description:""
        }
        FetchTodo(todo) 
        document.getElementById('todoInput').value =""
    }else {
        alert("Todo cannot be empty")
    }
    
    event.preventDefault()
}

function deleteTodo(event) {
    if(event.target.className.includes('trash')) {
        var todo = event.target.parentNode.parentNode
        todo.remove()
    }
}

function completeTask (event) {
    if(event.target.className === 'toggleBtn') {
        if(event.target.checked) {
            event.target.parentNode.style ="text-decoration:line-through"
        }else {
            event.target.parentNode.style ="text-decoration:none"
        }
    }
}

function deleteOrTick (event) {
    deleteTodo(event)
    completeTask(event)
}



function  main() {
    document.getElementById("myform").addEventListener("submit",addTodo)
    document.querySelector('.todo-wrapper').addEventListener('click',deleteOrTick)
}
main()