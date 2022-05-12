const txt = document.querySelector('.title');
const button = document.querySelector('.btn');

button.addEventListener('click', function(){

    txt.classList.toggle('classForJs');

});


const company = document.querySelectorAll('.faang li');

    for (const list of company) {

        list.addEventListener('click', function(){

           this.style.color = "red";

        });

    }


//---------------------


const input = document.querySelector('.list-content');
const addBtn = document.querySelector('.add-list-btn');
const list = document.querySelector('.faang');

    addBtn.addEventListener('click', function(){

    const newList = document.createElement('LI');
    const listContent = document.createTextNode(input.value);
    
    newList.appendChild(listContent);
    list.appendChild(newList);
    
    });






