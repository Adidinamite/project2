const addInputButton = document.getElementById("addInput")
const listOfInputs=[];
const getInputValue =()=>{
    let inputVal = document.getElementById("textInput").value;
    listOfInputs.push(inputVal);
    for(let i = 0;i< listOfInputs.length;i++)
    {
        document.getElementById("output").innerHTML =listOfInputs[i];
        //document.write("\n");
    }

}
addInputButton.addEventListener("click", getInputValue);