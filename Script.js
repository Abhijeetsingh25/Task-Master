let inputBox = document.getElementById("input-box")
let listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value ===  ''){
        alert("You must write  something")
      }
      else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span")
        span.innerHTML = "\u00d7"   
        li.appendChild(span)

      }
      inputBox.value = ""
      savaData();
}

listContainer.addEventListener("click" , function(e) {
   if(e.target.tagName=== "LI"){ 
    e.target.classList.toggle("checked");
    savaData()   
}
   else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    savaData()
   }
} , false)

function savaData(){  
    localStorage.setItem("data" , listContainer.innerHTML);
}

function snowTask(){  
    listContainer.innerHTML = localStorage.getItem("data");
}

snowTask();
