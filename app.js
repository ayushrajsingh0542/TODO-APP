let h1=document.createElement("h1");
h1.innerText="Todo App";
document.querySelector("body").append(h1);
let input=document.createElement("input");

document.querySelector("body").append(input);
input.setAttribute("placeholder","Enter your tasks.")

let button=document.createElement("button");
document.querySelector("body").append(button);
button.innerText="Submit";


let ol=document.createElement("ol");
document.querySelector("body").append(ol);


button.addEventListener("click",()=>{
    button.style.color="green";
    let task=input.value;
    let li=document.createElement("li");
    ol.appendChild(li);
    li.innerText=task;
    input.value="";
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    li.appendChild(delbtn);
   
});

ol.addEventListener("click",(event)=>{
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;//this is known as event delegation bcs normal deletion se sirf ek delete button pe kaam krega..isse sabpe
        listItem.remove();  
    }
})


