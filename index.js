import { elements } from "./elements.js";

const upper = document.getElementById("upper-elements");
const lower = document.getElementById("fbr");
const groupNumbers = document.getElementById("group-numbers");
for (let i = 1; i <= 18; i++) {
  const group = document.createElement("div");
  group.textContent = i;
  groupNumbers.appendChild(group);
}
const periodNumbers = document.getElementById("period-numbers");
for (let i = 1; i <= 7; i++) {
  const period = document.createElement("div");
  period.textContent = i;
  periodNumbers.appendChild(period);
}

elements.forEach((element) => {
  const baseUrl = "https://en.wikipedia.org/wiki/";
  element.url = baseUrl + element.name;
  const anchor = document.createElement("a");
  anchor.href = element.url;
  anchor.target = "_blank";
  anchor.className = "element";
  anchor.innerHTML = `
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
  anchor.classList.add("element");
  const categoryClass = element.category.toLowerCase().replace(/\s+/g, "-");
  anchor.classList.add(categoryClass);
  function groupFinderAct(atno) {
    return atno - 89;
  }
  function groupFinderLan(atno) {
    return atno - 57;
  }
  if (
    !(
      (element.number > 57 && element.number <= 71) ||
      (element.number > 89 && element.number <= 103)
    )
  ) {
    anchor.style.gridColumn = element.group;
    anchor.style.gridRow = element.period;
  } else if (element.number > 57 && element.number <= 71) {
    anchor.style.gridColumn = groupFinderLan(element.number);
    anchor.style.gridRow = 1;
  } else if (element.number > 89 && element.number <= 103) {
    anchor.style.gridColumn = groupFinderAct(element.number);
    anchor.style.gridRow = 2;
  }
  anchor.dataset.name = element.name.toLowerCase();
  anchor.dataset.symbol = element.symbol.toLowerCase();
  anchor.dataset.category = element.category.toLowerCase();
  if (
    !(
      (element.number > 57 && element.number <= 71) ||
      (element.number > 89 && element.number <= 103)
    )
  ) {
    upper.appendChild(anchor);
  } else {
    lower.append(anchor);
  }
});

var searchInput = document.querySelector("#searchInput");
var categoryFilter = document.querySelector("#categoryFilter");
var elements1 = document.querySelectorAll(".element");
searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase().trim();
  categoryFilter.value = "";
  elements1.forEach((el) => {
    const symbol = el.dataset.symbol?.toLowerCase() || "";
    const name = el.dataset.name?.toLowerCase() || "";
    el.classList.remove("highlighted");
    if (query.length <= 2) {
      if (query === "" || symbol === query.toLowerCase()) {
        el.classList.remove("hidden");
        if (query !== "" || symbol === query.toLowerCase()) {
          el.classList.add("highlighted");
          setTimeout(() => {
            el.classList.remove("highlighted");
          }, 2000);
          setTimeout(() => {
            el.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center",
            });
          }, 100);
        }
      } else {
        el.classList.add("hidden");
      }
    } else {
      if (query === "" || name.includes(query)) {
        el.classList.remove("hidden");
        if (query !== "" || name.includes(query)) {
          el.classList.add("highlighted");
          setTimeout(() => {
            el.classList.remove("highlighted");
          }, 2000);
          setTimeout(() => {
            el.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center",
            });
          }, 100);
        }
      } else {
        el.classList.add("hidden");
      }
    }
  });
});

categoryFilter.addEventListener("input", function () {
  searchInput.value = "";
  const query = categoryFilter.value;
  elements1.forEach((el) => {
    const category =
      el.dataset.category?.toLowerCase().replace(/\s+/g, "-") || "";
    if (query === "" || category === query) {
      el.classList.remove("hidden");
      if (query !== "" || category === query) {
        el.classList.add("highlighted");
        setTimeout(() => {
          el.classList.remove("highlighted");
        }, 2000);
        setTimeout(() => {
          el.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        }, 100);
      }
    } else {
      el.classList.add("hidden");
    }
  });
});
