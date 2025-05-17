import { elements } from './elements.js';

const upper = document.getElementById("upper-elements");
const lower = document.getElementById("fbr")
elements.forEach(element => {
  const elementBox = document.createElement("div");
  elementBox.classList.add("element");
  const categoryClass = element.category.toLowerCase().replace(/\s+/g, "-");
  elementBox.classList.add(categoryClass);
  function groupFinderAct(atno){
    return (atno-89)
  }
  function groupFinderLan(atno){
    return (atno-57)
  }
  if(!((element.number > 57 && element.number <= 71) || (element.number > 89 && element.number <= 103))){
  elementBox.style.gridColumn = element.group;
  elementBox.style.gridRow = element.period;}
  else if(element.number > 57 && element.number <= 71){
    elementBox.style.gridColumn = groupFinderLan(element.number);
    elementBox.style.gridRow = 1;
  }
  else if(element.number > 89 && element.number <= 103){
    elementBox.style.gridColumn = groupFinderAct(element.number);
    elementBox.style.gridRow = 2;
  }
elementBox.innerHTML = `
  <div class="main-info">
    <div class="element-number">${element.number}</div>
    <div class="element-symbol">${element.symbol}</div>
    <div class="element-name">${element.name}</div>
  </div>
  <div class="extra-info">
    <div class="atomic-mass">${element.atomicMass}</div>
    <div class="state">${element.normalState}</div>
  </div>
`;
  if(!((element.number > 57 && element.number <= 71) || (element.number > 89 && element.number <= 103))){
  upper.appendChild(elementBox);}
  else{
    lower.append(elementBox);
  }
});
