'use strict';

document.querySelector('#push').onclick = function () {
    if (document.querySelector('#task_input').value.length == 0) {
        alert('Please write your text first)')
    } else {
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
        
                <span id="task_name">
                    ${document.querySelector('#task_input').value}
                </span>
                <button class="delete">
                    <i class="trash trash-alt"></i>
                </button>
            </div>`;
    
        let curentTask = document.querySelectorAll('.delete');
        for (let i = 0; i < curentTask.length; i++) {
            curentTask[i].onclick = function() {
                this.parentNode.remove();
            }   
        }
    }
    document.querySelector('#task_input').value= "";

}