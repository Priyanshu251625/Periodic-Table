const elements = [
  { number: 1, symbol: "H", name: "Hydrogen", category: "nonmetal", group: 1, period: 1 },
  { number: 2, symbol: "He", name: "Helium", category: "noble gas", group: 18, period: 1 },
  { number: 3, symbol: "Li", name: "Lithium", category: "alkali metal", group: 1, period: 2 },
  { number: 4, symbol: "Be", name: "Beryllium", category: "alkaline earth metal", group: 2, period: 2 },
  { number: 5, symbol: "B", name: "Boron", category: "metalloid", group: 13, period: 2 },
  { number: 6, symbol: "C", name: "Carbon", category: "nonmetal", group: 14, period: 2 },
  { number: 7, symbol: "N", name: "Nitrogen", category: "nonmetal", group: 15, period: 2 },
  { number: 8, symbol: "O", name: "Oxygen", category: "nonmetal", group: 16, period: 2 },
  { number: 9, symbol: "F", name: "Fluorine", category: "halogen", group: 17, period: 2 },
  { number: 10, symbol: "Ne", name: "Neon", category: "noble gas", group: 18, period: 2 },
  { number: 11, symbol: "Na", name: "Sodium", category: "alkali metal", group: 1, period: 3 },
  { number: 12, symbol: "Mg", name: "Magnesium", category: "alkaline earth metal", group: 2, period: 3 },
  { number: 13, symbol: "Al", name: "Aluminium", category: "post-transition metal", group: 13, period: 3 },
  { number: 14, symbol: "Si", name: "Silicon", category: "metalloid", group: 14, period: 3 },
  { number: 15, symbol: "P", name: "Phosphorus", category: "nonmetal", group: 15, period: 3 },
  { number: 16, symbol: "S", name: "Sulfur", category: "nonmetal", group: 16, period: 3 },
  { number: 17, symbol: "Cl", name: "Chlorine", category: "halogen", group: 17, period: 3 },
  { number: 18, symbol: "Ar", name: "Argon", category: "noble gas", group: 18, period: 3 },
  { number: 19, symbol: "K", name: "Potassium", category: "alkali metal", group: 1, period: 4 },
  { number: 20, symbol: "Ca", name: "Calcium", category: "alkaline earth metal", group: 2, period: 4 },
  { number: 21, symbol: "Sc", name: "Scandium", category: "transition metal", group: 3, period: 4 },
  { number: 22, symbol: "Ti", name: "Titanium", category: "transition metal", group: 4, period: 4 },
  { number: 23, symbol: "V", name: "Vanadium", category: "transition metal", group: 5, period: 4 },
  { number: 24, symbol: "Cr", name: "Chromium", category: "transition metal", group: 6, period: 4 },
  { number: 25, symbol: "Mn", name: "Manganese", category: "transition metal", group: 7, period: 4 },
  { number: 26, symbol: "Fe", name: "Iron", category: "transition metal", group: 8, period: 4 },
  { number: 27, symbol: "Co", name: "Cobalt", category: "transition metal", group: 9, period: 4 },
  { number: 28, symbol: "Ni", name: "Nickel", category: "transition metal", group: 10, period: 4 },
  { number: 29, symbol: "Cu", name: "Copper", category: "transition metal", group: 11, period: 4 },
  { number: 30, symbol: "Zn", name: "Zinc", category: "transition metal", group: 12, period: 4 },
  { number: 31, symbol: "Ga", name: "Gallium", category: "post-transition metal", group: 13, period: 4 },
  { number: 32, symbol: "Ge", name: "Germanium", category: "metalloid", group: 14, period: 4 },
  { number: 33, symbol: "As", name: "Arsenic", category: "metalloid", group: 15, period: 4 },
  { number: 34, symbol: "Se", name: "Selenium", category: "polyatomic nonmetal", group: 16, period: 4 },
  { number: 35, symbol: "Br", name: "Bromine", category: "halogen", group: 17, period: 4 },
  { number: 36, symbol: "Kr", name: "Krypton", category: "noble gas", group: 18, period: 4 },
  { number: 37, symbol: "Rb", name: "Rubidium", category: "alkali metal", group: 1, period: 5 },
  { number: 38, symbol: "Sr", name: "Strontium", category: "alkaline earth metal", group: 2, period: 5 },
  { number: 39, symbol: "Y", name: "Yttrium", category: "transition metal", group: 3, period: 5 },
  { number: 40, symbol: "Zr", name: "Zirconium", category: "transition metal", group: 4, period: 5 },
  { number: 41, symbol: "Nb", name: "Niobium", category: "transition metal", group: 5, period: 5 },
  { number: 42, symbol: "Mo", name: "Molybdenum", category: "transition metal", group: 6, period: 5 },
  { number: 43, symbol: "Tc", name: "Technetium", category: "transition metal", group: 7, period: 5 },
  { number: 44, symbol: "Ru", name: "Ruthenium", category: "transition metal", group: 8, period: 5 },
  { number: 45, symbol: "Rh", name: "Rhodium", category: "transition metal", group: 9, period: 5 },
  { number: 46, symbol: "Pd", name: "Palladium", category: "transition metal", group: 10, period: 5 },
  { number: 47, symbol: "Ag", name: "Silver", category: "transition metal", group: 11, period: 5 },
  { number: 48, symbol: "Cd", name: "Cadmium", category: "transition metal", group: 12, period: 5 },
  { number: 49, symbol: "In", name: "Indium", category: "post-transition metal", group: 13, period: 5 },
  { number: 50, symbol: "Sn", name: "Tin", category: "post-transition metal", group: 14, period: 5 },
  { number: 51, symbol: "Sb", name: "Antimony", category: "metalloid", group: 15, period: 5 },
  { number: 52, symbol: "Te", name: "Tellurium", category: "metalloid", group: 16, period: 5 },
  { number: 53, symbol: "I", name: "Iodine", category: "halogen", group: 17, period: 5 },
  { number: 54, symbol: "Xe", name: "Xenon", category: "noble gas", group: 18, period: 5 },
  { number: 55, symbol: "Cs", name: "Cesium", category: "alkali metal", group: 1, period: 6 },
  { number: 56, symbol: "Ba", name: "Barium", category: "alkaline earth metal", group: 2, period: 6 },
  { number: 57, symbol: "La", name: "Lanthanum", category: "lanthanide", group: 3, period: 6 },
  { number: 58, symbol: "Ce", name: "Cerium", category: "lanthanide", group: 3, period: 6 },
  { number: 59, symbol: "Pr", name: "Praseodymium", category: "lanthanide", group: 3, period: 6 },
  { number: 60, symbol: "Nd", name: "Neodymium", category: "lanthanide", group: 3, period: 6 },
  { number: 61, symbol: "Pm", name: "Promethium", category: "lanthanide", group: 3, period: 6 },
  { number: 62, symbol: "Sm", name: "Samarium", category: "lanthanide", group: 3, period: 6 },
  { number: 63, symbol: "Eu", name: "Europium", category: "lanthanide", group: 3, period: 6 },
  { number: 64, symbol: "Gd", name: "Gadolinium", category: "lanthanide", group: 3, period: 6 },
  { number: 65, symbol: "Tb", name: "Terbium", category: "lanthanide", group: 3, period: 6 },
  { number: 66, symbol: "Dy", name: "Dysprosium", category: "lanthanide", group: 3, period: 6 },
  { number: 67, symbol: "Ho", name: "Holmium", category: "lanthanide", group: 3, period: 6 },
  { number: 68, symbol: "Er", name: "Erbium", category: "lanthanide", group: 3, period: 6 },
  { number: 69, symbol: "Tm", name: "Thulium", category: "lanthanide", group: 3, period: 6 },
  { number: 70, symbol: "Yb", name: "Ytterbium", category: "lanthanide", group: 3, period: 6 },
  { number: 71, symbol: "Lu", name: "Lutetium", category: "lanthanide", group: 3, period: 6 },
  { number: 72, symbol: "Hf", name: "Hafnium", category: "transition metal", group: 4, period: 6 },
  { number: 73, symbol: "Ta", name: "Tantalum", category: "transition metal", group: 5, period: 6 },
  { number: 74, symbol: "W", name: "Tungsten", category: "transition metal", group: 6, period: 6 },
  { number: 75, symbol: "Re", name: "Rhenium", category: "transition metal", group: 7, period: 6 },
  { number: 76, symbol: "Os", name: "Osmium", category: "transition metal", group: 8, period: 6 },
  { number: 77, symbol: "Ir", name: "Iridium", category: "transition metal", group: 9, period: 6 },
  { number: 78, symbol: "Pt", name: "Platinum", category: "transition metal", group: 10, period: 6 },
  { number: 79, symbol: "Au", name: "Gold", category: "transition metal", group: 11, period: 6 },
  { number: 80, symbol: "Hg", name: "Mercury", category: "transition metal", group: 12, period: 6 },
  { number: 81, symbol: "Tl", name: "Thallium", category: "post-transition metal", group: 13, period: 6 },
  { number: 82, symbol: "Pb", name: "Lead", category: "post-transition metal", group: 14, period: 6 },
  { number: 83, symbol: "Bi", name: "Bismuth", category: "post-transition metal", group: 15, period: 6 },
  { number: 84, symbol: "Po", name: "Polonium", category: "post-transition metal", group: 16, period: 6 },
  { number: 85, symbol: "At", name: "Astatine", category: "metalloid", group: 17, period: 6 },
  { number: 86, symbol: "Rn", name: "Radon", category: "noble gas", group: 18, period: 6 },
  { number: 87, symbol: "Fr", name: "Francium", category: "alkali metal", group: 1, period: 7 },
  { number: 88, symbol: "Ra", name: "Radium", category: "alkaline earth metal", group: 2, period: 7 },
  { number: 89, symbol: "Ac", name: "Actinium", category: "actinide", group: 3, period: 7 },
  { number: 90, symbol: "Th", name: "Thorium", category: "actinide", group: 3, period: 7 },
  { number: 91, symbol: "Pa", name: "Protactinium", category: "actinide", group: 3, period: 7 },
  { number: 92, symbol: "U", name: "Uranium", category: "actinide", group: 3, period: 7 },
  { number: 93, symbol: "Np", name: "Neptunium", category: "actinide", group: 3, period: 7 },
  { number: 94, symbol: "Pu", name: "Plutonium", category: "actinide", group: 3, period: 7 },
  { number: 95, symbol: "Am", name: "Americium", category: "actinide", group: 3, period: 7 },
  { number: 96, symbol: "Cm", name: "Curium", category: "actinide", group: 3, period: 7 },
  { number: 97, symbol: "Bk", name: "Berkelium", category: "actinide", group: 3, period: 7 },
  { number: 98, symbol: "Cf", name: "Californium", category: "actinide", group: 3, period: 7 },
  { number: 99, symbol: "Es", name: "Einsteinium", category: "actinide", group: 3, period: 7 },
  { number: 100, symbol: "Fm", name: "Fermium", category: "actinide", group: 3, period: 7 },
  { number: 101, symbol: "Md", name: "Mendelevium", category: "actinide", group: 3, period: 7 },
  { number: 102, symbol: "No", name: "Nobelium", category: "actinide", group: 3, period: 7 },
  { number: 103, symbol: "Lr", name: "Lawrencium", category: "actinide", group: 3, period: 7 },
  { number: 104, symbol: "Rf", name: "Rutherfordium", category: "transition metal", group: 4, period: 7 },
  { number: 105, symbol: "Db", name: "Dubnium", category: "transition metal", group: 5, period: 7 },
  { number: 106, symbol: "Sg", name: "Seaborgium", category: "transition metal", group: 6, period: 7 },
  { number: 107, symbol: "Bh", name: "Bohrium", category: "transition metal", group: 7, period: 7 },
  { number: 108, symbol: "Hs", name: "Hassium", category: "transition metal", group: 8, period: 7 },
  { number: 109, symbol: "Mt", name: "Meitnerium", category: "unknown, probably transition metal", group: 9, period: 7 },
  { number: 110, symbol: "Ds", name: "Darmstadtium", category: "unknown, probably transition metal", group: 10, period: 7 },
  { number: 111, symbol: "Rg", name: "Roentgenium", category: "unknown, probably transition metal", group: 11, period: 7 },
  { number: 112, symbol: "Cn", name: "Copernicium", category: "transition metal", group: 12, period: 7 },
  { number: 113, symbol: "Nh", name: "Nihonium", category: "unknown, probably transition metal", group: 13, period: 7 },
  { number: 114, symbol: "Fl", name: "Flerovium", category: "post-transition metal", group: 14, period: 7 },
  { number: 115, symbol: "Mc", name: "Moscovium", category: "unknown, probably post-transition metal", group: 15, period: 7 },
  { number: 116, symbol: "Lv", name: "Livermorium", category: "unknown, probably post-transition metal", group: 16, period: 7 },
  { number: 117, symbol: "Ts", name: "Tennessine", category: "unknown, probably metalloid", group: 17, period: 7 },
  { number: 118, symbol: "Og", name: "Oganesson", category: "noble gas", group: 18, period: 7 }
]



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
    <div class="element-number">${element.number}</div>
    <div class="element-symbol">${element.symbol}</div>
    <div class="element-name">${element.name}</div>
  `;
  if(!((element.number > 57 && element.number <= 71) || (element.number > 89 && element.number <= 103))){
  upper.appendChild(elementBox);}
  else{
    lower.append(elementBox);
  }
});
