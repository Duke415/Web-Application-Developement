const input = document.querySelector('.todo-input');
const btn = document.querySelector('.add-btn');
const list = document.querySelector('.todo-list');
const select = document.querySelector('.filter');

btn.addEventListener('click', addList);
list.addEventListener('click', deleteWork);
select.addEventListener('click', filter);
document.addEventListener('DOMContentLoaded', getDataFromLoaclStorage);

function addList(event){

    event.preventDefault();

    const subBox = document.createElement('div');
    subBox.classList.add('box2');

    const newList = document.createElement('li');
    newList.innerText = input.value;
    newList.classList.add('new-list');
    subBox.appendChild(newList);

    saveToLocalStorage(input.value);

    const addBtn = document.createElement('button');
    addBtn.innerHTML = '<i class="fas fa-check"></i>';
    addBtn.classList.add('comp-btn');
    subBox.appendChild(addBtn);

    const delBtn = document.createElement('button');
    delBtn.innerHTML = '<i class="fas fa-times"></i>';
    delBtn.classList.add('del-btn');
    subBox.appendChild(delBtn);

    list.appendChild(subBox);

    input.value = "";
}


function deleteWork(event){

    const itemTarget = event.target;

    if(itemTarget.classList[0]==='del-btn'){

        const toDel = itemTarget.parentElement;
        toDel.classList.add('deleting');

        removeDataFromLocalStorage(toDel);

        toDel.addEventListener('transitionend', function(){
            toDel.remove();

        });
    }

    if(itemTarget.classList[0]==='comp-btn'){

        const completed = itemTarget.parentElement;
        completed.classList.toggle('completed');

    }

}


function filter(event){

    const itemOption = list.childNodes;
    
    itemOption.forEach(function(item){

        switch(event.target.value){

            case "all":
                item.style.display = 'flex';

                break;

            case "completed":

            if(item.classList.contains('completed')){

                item.style.display = 'flex';
            }

            else{

                item.style.display = 'none';
            }

            break;


            case "uncompleted":

            if(!item.classList.contains('completed')){

                item.style.display = 'flex';
            }

            else{

                item.style.display = 'none';
            }

            break;

        }

    });
}

function saveToLocalStorage(value){

    let arr;

    if(localStorage.getItem("arr")===null){
        arr=[];
    }

    else{

        arr = JSON.parse(localStorage.getItem("arr"));
    }

    arr.push(value);
    localStorage.setItem("arr", JSON.stringify(arr));

}

function getDataFromLoaclStorage(){

    let arr;

    if(localStorage.getItem("arr")===null){
        arr=[];
    }

    else{

        arr = JSON.parse(localStorage.getItem("arr"));
    }

    arr.forEach(function(value){


        const subBox = document.createElement('div');
    subBox.classList.add('box2');

    const newList = document.createElement('li');
    newList.innerText = value;
    newList.classList.add('new-list');
    subBox.appendChild(newList);

    const addBtn = document.createElement('button');
    addBtn.innerHTML = '<i class="fas fa-check"></i>';
    addBtn.classList.add('comp-btn');
    subBox.appendChild(addBtn);

    const delBtn = document.createElement('button');
    delBtn.innerHTML = '<i class="fas fa-times"></i>';
    delBtn.classList.add('del-btn');
    subBox.appendChild(delBtn);

    list.appendChild(subBox);


    });

}

function removeDataFromLocalStorage(value){

    let arr;

    if(localStorage.getItem("arr")===null){
        arr=[];
    }

    else{

        arr = JSON.parse(localStorage.getItem("arr"));
    }

    const index = value.children[0].innerText;
    arr.splice(arr.indexOf(index),1);
    localStorage.setItem("arr",JSON.stringify(arr));
    
}