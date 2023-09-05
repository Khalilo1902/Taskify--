import "../src/style.css";
import { deleteElement, modifyElement, updateLiContent } from "./tools";

document.querySelector("#app").innerHTML = /*html */ `
<div>
          
  <h1 class =" text-sky-900 text-[5rem] text-center">Taskify</h1>
  
  <div  class = "flex items-center justify-center mt-[20rem]">
     <div class =" border border-slate-700 w-fit rounded-lg">
      <input type="text" id="taskInput" class =" border border-none outline-none">
      <button id="btnGo" class=" bg-slate-300 w-10 px-3 py-2 rounded-r-lg" >Go!</button>
     </div>
  </div>
  
</div>
  
<ul class = "flex items-center justify-center flex-col mt-10  gap-6">
   
</ul>


</div>
`;
const input = document.querySelector("#taskInput");
const ul = document.querySelector("ul");

document.querySelector("#btnGo").addEventListener("click", () => {
  const inputValue = input.value;
  
  if (inputValue.trim() !== "") {
    const li = document.createElement("li");
    ul.appendChild(li)
    
    updateLiContent(li, inputValue, input)
    

    
  }
});
