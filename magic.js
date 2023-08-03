const addInputButton = document.getElementById("addInput")
const container = document.getElementById("list");
const taskList=[];
let cnt = 0;
const getInputValue =()=>{
    taskList.push(cnt++);
    let inputVal = document.getElementById("textInput").value;

    const content = document.createTextNode(inputVal);
    const paragraph = document.createElement("p");
    const task = document.createElement("span");
    const deleteButton = document.createElement("button");
    const buttonText = document.createTextNode("X");
    paragraph.classList.add("bubble");
    deleteButton.setAttribute("id",cnt);
    //deleteButton.setAttribute("id",(+cnt)+"-"+(+cnt) );
    task.appendChild(content);
    paragraph.appendChild(task);
    container.appendChild(paragraph);
    paragraph.appendChild(deleteButton);
    deleteButton.appendChild(buttonText);
    window.onclick = e => {
        e.preventDefault();
        const clickedButton = e.target;  // to get the element
        console.log(clickedButton.innerText);
        if(clickedButton.innerText === "X" ) {
            clickedButton.parentNode.remove()
        }
    }
    /*const deleteTask = () =>{
        const element = document.getElementById("1");
        element.parentNode.remove();
    }
    deleteButton.addEventListener("click",deleteTask);*/
}
addInputButton.addEventListener("click", getInputValue);