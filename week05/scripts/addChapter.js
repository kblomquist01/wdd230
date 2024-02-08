const input = document.querySelector('#favchap')
const button = document.querySelector('button')
const list = document.querySelector('#list')

button.addEventListener('click', function() {
    if(input.value != ''){
        const li = document.createElement('li');
        const delButton = document.createElement('button');
        li.textContent = input.value;
        delButton.textContent = 'X';
        li.append(delButton);
        list.append(li);
        delButton.addEventListener('click', function(){
            list.removeChild(li);
            input.focus();
        })
    }
    input.focus();
    input.value = '';
})


