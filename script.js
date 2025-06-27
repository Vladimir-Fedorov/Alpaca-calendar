let swithchers, lightTheme, items, itemsArr, activeElems, clickedIndex, activeIndexes, i, selectedElems, first;

swithchers = document.querySelector(".swithcher");
lightTheme = "light";

swithchers.addEventListener("click", () => {
  document.body.classList.toggle(lightTheme);
});

itemsArr = [];
activeIndexes = [];

items = document.querySelectorAll(".calendar-list-item");
items.forEach((item) => {
  itemsArr.push(item);
  item.addEventListener("click", () => {
    clickedIndex = itemsArr.indexOf(item);
    activeElems = document.querySelectorAll(".calendar-list__item--active");

    first = document.querySelector(".calendar-list__item--first");
    if(first != null) {
      if(parseInt(activeIndexes[0]) != null || parseInt(activeIndexes[1]) !=null) {
        return;
      }
    }

    if(activeElems.length <= 1) {
      item.classList.add("calendar-list__item--active");
      if(activeIndexes.length < 1) {
        activeIndexes[0] = clickedIndex;
      }
      else {
        activeIndexes[1] = clickedIndex;

        if(activeIndexes[1] > activeIndexes[0]) {
          for(i=activeIndexes[0]; i<=activeIndexes[1]; i++) {
            items[i].classList.add("calendar-list__item--selected");
            items[i].classList.remove("calendar-list__item--active");
            items[activeIndexes[0]].classList.add("calendar-list__item--first");
            items[activeIndexes[0]].classList.remove("calendar-list__item--selected");
            items[activeIndexes[1]].classList.add("calendar-list__item--last");
            items[activeIndexes[1]].classList.remove("calendar-list__item--selected");
          }
        }
        else {
          for(i=activeIndexes[0]; i>=activeIndexes[1]; i--) {
            items[i].classList.add("calendar-list__item--selected");
            items[i].classList.remove("calendar-list__item--active");
            items[activeIndexes[0]].classList.add("calendar-list__item--last");
            items[activeIndexes[0]].classList.remove("calendar-list__item--selected");
            items[activeIndexes[1]].classList.add("calendar-list__item--first");
            items[activeIndexes[1]].classList.remove("calendar-list__item--selected");
          }
        }
      }
    }
  })
});

reset = document.querySelector('.reset');
reset.addEventListener("click", () => {
  items.forEach((item)=>{
    item.classList.remove("calendar-list__item--selected");
    item.classList.remove("calendar-list__item--active");
    item.classList.remove("calendar-list__item--first");
    item.classList.remove("calendar-list__item--last");
  });
  activeIndexes=[];
});