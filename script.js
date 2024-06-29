const field = document.getElementById('field')
const button = document.getElementById('button')
const wrapper = document.getElementById('todo-wrapper')

function createItem() {
    return `

    <div class="item">
              <div class="left">
                   <input type="checkbox" name="" id="">
                   <p>${field.value}</p>
              </div>

              <div class="right">
                   <button>
                        <i class="fa-regular fa-pen-to-square"></i>
                        <span>Edit</span>
                   </button>

                   <button>
                        <i class="fa-solid fa-trash-can"></i>
                        <span>Del</span>
                   </button>

              </div>
         </div>
        `;
}



function validate() {
    const todo = field.value;
    if(todo.length < 5) {
        alert('Eng kamidada 5 ta belgidan iborat bolishi kerak');
        field.focus();
        field.style.outlineColor = 'red'
        return false;
     }


    return true;
}

function saveStorage(value) {
    const todo = {
        name: value,
        status: 'active',
        id: Date.now()
    }
    let deta = [];
    if(localStorage.getItem('todos')) {
        deta = JSON.parse(localStorage.getItem('todos'))

    }
   deta.push(todo);
   localStorage.setItem('todos', JSON.stringify(deta))
}

button && button.addEventListener('click', function(event) {
     event.preventDefault();
     const isValid = validate()
     if (!isValid) {
        return;
     }
     const item = createItem(field.value);
     wrapper.innerHTML += item;
     field.value = '';
     field.focus();
})