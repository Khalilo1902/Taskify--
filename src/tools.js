


export const deleteElement = (e) => {
  // je recupere l'element
  const element = e.target

  element.parentNode.remove()
}

  export const modifyElement = (e)=>{

   
   const li = e.target.parentNode

   const span = li.querySelector('span')
   const value = span.innerText;

   
   const input = document.createElement('input')
   input.type = 'text'
   input.value = value;
   const saveButton = document.createElement('button')
   saveButton.className = 'fa fa-check bg-green-600 w-10 px-3 py-1 rounded-r-lg'
   saveButton.onclick = (e) => saveElement(e);
   li.innerHTML = ''
   li.appendChild(input)
   li.appendChild(saveButton)
  }

  const saveElement = (e) => {
    const li = e.target.parentNode
    const input = li.querySelector('input')
    const inputValue = input.value;

    updateLiContent(li, inputValue, input)
  }
  
  export const updateLiContent = (li, value, input) => {
    li.className = "bg-slate-500 p-2 rounded-lg text-center border border-b-4";
    li.innerHTML = `<span>${value}<span> `;
    const icon1Elem = document.createElement("i");
    icon1Elem.className = "icon-trash fa-solid fa-trash ml-3 text-red-500";
    li.appendChild(icon1Elem);
    const icon2Elem = document.createElement("i");
    icon2Elem.className = "fa-solid fa-pencil ml-4 text-red-500";
    li.appendChild(icon2Elem);
    input.value = "";
    icon1Elem.addEventListener("click",deleteElement);
    icon2Elem.addEventListener("click",modifyElement)
  }