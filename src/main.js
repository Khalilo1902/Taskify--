import "../src/style.css";

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
    ul.appendChild(li);
    li.className = "bg-slate-500 p-2 rounded-lg text-center border border-b-4";
    li.innerHTML += inputValue;
    const icon1Elem = document.createElement("i");
    icon1Elem.className = "icon-trash fa-solid fa-trash ml-3 text-red-500";
    li.appendChild(icon1Elem);
    const icon2Elem = document.createElement("i");
    icon2Elem.className = "fa-solid fa-pencil ml-4 text-red-500";
    li.appendChild(icon2Elem);

    
    

    input.value = "";
  }
});

const iconTrash = document.querySelector(".icon-trash");
