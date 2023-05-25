window.onload =function(){    
    // creatk task array and store it in local storage
    let tasks=[];
    let jsonString=JSON.stringify(tasks);
    localStorage.setItem('tasks',jsonString);

    
    const plusSign=document.querySelector('#add-button');
    let taskCount=document.getElementById('count-tasks');
    let count=1;
    
    // event adding on add item list
    plusSign.addEventListener('click', function(e) {
        let inputText=document.getElementById('to-do-input');
        let text=inputText.value;

        let jsonString=localStorage.getItem('tasks');
        let tasks=JSON.parse(jsonString);
        tasks.push(text);
        createListItem(text);
        let updateJsonString=tasks.stringify;
        localStorage.setItem('tasks',updateJsonString);
    })
    function createListItem(text){
        //create all required element li, checkbox, Icon
        let li=document.createElement('li');
        let checkBox=document.createElement("input");
        let crossIcon=document.createElement("i");
        
        //define checkbox type and add required class
        checkBox.type='checkbox';
        checkBox.classList.add('checkbox-round');
        
        //add required class on icon
        crossIcon.classList.add("fas");
        crossIcon.classList.add("fa-times");
        crossIcon.classList.add("cross-button");
        
        //now add list item to your list
        if(!li.innerText=='')
        {
            li.innerText=text;
            li.appendChild(checkBox);
            li.appendChild(crossIcon);
            document.getElementById("list-item").appendChild(li);
            count++;
        }

        //empty input box and update remaining tasks
        inputText.value="";
        let countString= taskCount.innerText;
        taskCount.innerText=count.toString()+countString.substring(1);
        
    }

    //changing color of checked item
    var checkbox = document.querySelectorALL("input[type=checkbox]");
    checkbox.addEventListener('click', function() {
        let list=checkbox.parentNode;
        if (this.checked) {
            list.classList.add('purple-bg');  
        } else {
            list.classList.remove('purple-bg');
        }
    });

    let myList= document.getElementById("list-item");
    myList.addEventListener('click',function(e){
        if(e.target.classList.contains('cross-button')){
            let listItem=e.target.parentNode;
            removeItem(listItem.innerText);
            listItem.remove;
            count--;
            let countString= taskCount.innerText;
            taskCount.innerText=count.toString()+countString.substring(1);
        }
    })
    function removeItem(text){
        let jsonString=localStorage.getItem('tasks');
        let tasks=JSON.parse(jsonString);
        for (var i = tasks.length - 1; i >= 0; i--) {
            if (tasks[i] === text) {
              myArray.splice(i, 1);
            }
        }
    }
    
}