const inputbox=document.getElementById("input-box")
const listContainer=document.getElementById("list-container")
function addTask(){
    if(inputbox.value === ''){
        alert("You Must Add something...");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        let modify=document.createElement("modify")
        modify.innerHTML="M"
        li.appendChild(modify)
    }
    inputbox.value="";

}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.tagName === 'MODIFY'){
        let li = e.target.parentElement;
        let inputbox = document.createElement('input');
        inputbox.type = 'text';
        inputbox.value = li.innerText;
        var modifiedText = inputbox.value.slice(0, -2);
        inputbox.value=modifiedText
        
        inputbox.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                li.innerText = inputbox.value;
                let span=document.createElement("span");
                span.innerHTML="\u00d7";
                li.appendChild(span);
                let modify=document.createElement("modify")
                modify.innerHTML="M"
                li.appendChild(modify)
                saveData();
            }
        });
        li.innerHTML = '';   
        li.appendChild(inputbox);
        li.appendChild(span);
        
        
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();