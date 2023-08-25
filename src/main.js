import "../src/style.css";

document.querySelector("#app").innerHTML = /*html */ `
  <div>
<h1 class =" text-sky-900 text-[5rem] text-center">Taskify</h1>
  
  <div class = "flex items-center justify-center mt-[20rem]">
  <div class =" border border-slate-700 w-fit rounded-lg">
    <input type="text" class =" border border-none outline-none">
    <button id="btnOne" class=" bg-slate-300 w-10 px-3 py-2 rounded-r-lg" >Go!</button>
  </div>
  
</div>
<div>
<ul class = "flex items-center justify-center flex-col mt-10  gap-6">
    <li ></li>
   
  </ul>
</div>

</div>
`;
const input = document.querySelector("input");

const listElement = document.querySelector("li");

const button = document.querySelector("#btnOne");
button.addEventListener("click", () => {

  const inputValue = input.value;
  listElement.innerHTML += /*html */ `
  <li class = " bg-slate-500 w-fit p-2 rounded-lg text-center border border-b-4 ">
  ${inputValue} <span class="trash"> <i class =" fa-solid fa-trash ml-[3rem]" style="color: #e600b4;">

  </i>
</span>
<span id="pencil">
<i class=" ml-4 fa-solid fa-pencil" style="color: #e600b4;"></i>
</span>
  </li>
  `;
  input.value = "";

  const spanElement = document.querySelector(".trash");



spanElement.addEventListener("click", () => {
  
  spanElement.parentNode.remove()
  
});

const pencilSpan = document.querySelector("#pencil")


pencilSpan.addEventListener("click",()=>{
  
  const createInput = document.createElement("input")
  const listElementPencil = document.createElement("li")
  console.log(listElementPencil);
  listElementPencil.appendChild(createInput)
  
  console.log(listElementPencil);
  
  listElementPencil.innerHTML += /*html */`
  <li class =" bg-slate-500 w-fit p-2 rounded-lg text-center border border-b-4 ">${createInput.outerHTML} <button id="okButton">ok</button> </li>
  
  `
  listElement.replaceWith(listElementPencil)
})
const okButton = document.querySelector("#okButton")

okButton.addEventListener("click",(e)=>{
  e.target.className = 'okButton'
console.log("khalil")
  inputValue.replaceWith(createInput.value)


  

})

});

