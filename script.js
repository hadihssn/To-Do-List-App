let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let input = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit", (abc) => {
    abc.preventDefault();
    // console.log("clicked");
    formValidation();
});

let formValidation = () => {
    if (input.value === "" && textInput.value === "") {
        // console.log("failure");
        msg.innerHTML = "Task Title or Description Cannot Be Empty";
    }
    else {
        // console.log("Success")
        msg.innerHTML = "";
        acceptData();
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();

        (() => {
            add.setAttribute("data-bs-dismiss", "");
        })();
    }
};

let data = {};

let acceptData = () => {
    data["text"] = textInput.value;
    data["date"] = dateInput.value;
    data["description"] = input.value;
    // console.log(data);
    createTasks();
};

let createTasks = () => {
    tasks.innerHTML += `
        <div class="task">

            <div class="details">
                
                <span class="taskName">
                    ${data.text}
                </span>
                
                <span class="taskDate">
                    ${data.date}
                </span>

            </div>

            <p>${data.description}</p>
            
            <span class="options">
                <i data-bs-toggle="modal" data-bs-target="#form" onClick = "editTask(this)" class="fa-solid fa-pen-to-square"></i>
                <i onClick = "deleteTask(this)" class="fa-sharp fa-solid fa-trash"></i>
            </span>

        </div>
    `;
    resetForm();
};

let resetForm = (e) => {
    textInput.value = "";
    dateInput.value = "";
    input.value = "";

};

let deleteTask = (x) => {
    x.parentElement.parentElement.remove();
};

let editTask = (x) => {
    let selectedPost = x.parentElement.parentElement;
    // console.log(selectedPost);
    
    textInput.value = selectedPost.children[0].children[0].innerHTML;
    dateInput.value = selectedPost.children[0].children[1].innerHTML;
    input.value = selectedPost.children[1].innerHTML;

    selectedPost.remove();
};