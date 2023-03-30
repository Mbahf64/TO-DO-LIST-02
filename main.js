





const inputBox = document.getElementById('input-box'); //this variable is assigned to the input box,place where you add your task.
const tasks = document.getElementById('tasks'); //this variable is assigned to the the area where you will view the task you added


function addTask(){
    if(inputBox.value === '') {
    alert('You must write something!')
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        tasks.appendChild(li);
        let span = document.createElement('span');
         span.innerHTML = "\u00d7";
         li.appendChild(span);
    }
inputBox.value = '';
saveData();
}

tasks.addEventListener('click', function(e) {
   
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


//this function is to store the data on local storage
function saveData(){
    localStorage.setItem('data', tasks.innerHTML);
};

//This function is to make the task not to remove when you refresh the page
function showTasks(){
    tasks.innerHTML = localStorage.getItem('data');
};
showTasks();






