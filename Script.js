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
        span.innerHTML = "\u00d7"  // cros icon ke lie ki jo item add ho list me uske sath cross icon rhe 
        li.appendChild(span)

      }
      inputBox.value = ""
      savaData();
}

listContainer.addEventListener("click" , function(e) {
   if(e.target.tagName=== "LI"){  // tagname agr li h to
    e.target.classList.toggle("checked"); // toggle kr denge
    savaData()   
}
   else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    savaData()
   }
} , false)

function savaData(){  
    localStorage.setItem("data" , listContainer.innerHTML); // set krege data ko listcontainer ke andr 
}

function snowTask(){  // hm jis v item ko list kre wo page refres hone ke bad v rha aaye  localStorage me
    listContainer.innerHTML = localStorage.getItem("data");   // get krege data ko
}

snowTask();
