let text = document.querySelector("input")
let btn = document.querySelector("button")
let ul = document.querySelector("ul")
let list =document.querySelector("li")
let task = text.value;
btn.addEventListener("click",function(){
    console.log("clicked")
    console.log(text.value);
    let item =document.createElement("li")
    item.innerText = text.value
    let delBtn = document.createElement("button")
    delBtn.innerText= "delete"
    delBtn.classList.add("delete")
    item.appendChild(delBtn)
    ul.appendChild(item)
    text.value ="";
})
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove(); 
    }
})
// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         console.log("deleted");
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// };