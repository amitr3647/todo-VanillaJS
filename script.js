inputEl = document.querySelector('.inputBox')
addBtnEl = document.querySelector('.addBtn')
displayEl = document.querySelector('ul');
let text = '';
let index = 0;
function addClickEvent(){
    const div = document.createElement('div');
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    const completedBtn = document.createElement('button');
    div.classList.add('taskList');
    deleteBtn.classList.add('deleteBtn');
    completedBtn.classList.add('completed');
    deleteBtn.textContent = 'delete';
    completedBtn.textContent = 'Done';
    li.textContent = text;
    index = index+1;

deleteBtn.addEventListener('click',()=>onTaskDelete(div));
completedBtn.addEventListener('click',()=>onTaskCompletion(li));
    div.appendChild(li);
    div.appendChild(deleteBtn);
    div.appendChild(completedBtn);
    displayEl.appendChild(div);
inputEl.value = '';
text = '';
}

function onTaskDelete(div){
    console.log('dleeteadsf')
    displayEl.removeChild(div);
}
function onTaskCompletion(li){
    console.log('task completing')
li.style.textDecoration = 'line-through';
}


inputEl.addEventListener('change',(e)=>{
text = e.target.value;
console.log('text',text)
})
inputEl.addEventListener('keypress',(e)=>{
    console.log('e',e)
    if(e.key === 'Enter'){
        text = e.target.value;
        addClickEvent();
    }
})

addBtnEl.addEventListener('click',()=>addClickEvent())
