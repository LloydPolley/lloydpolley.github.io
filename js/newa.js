import wixData from "wix-data";


let searchValue = "";
let filterValue = "All";

// Search field search
let debounceTimer;
export function iTitle_keyPress(event, $w) {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
    debounceTimer = undefined;
  }
  debounceTimer = setTimeout(() => {
    var sVal = $w("#iTitle").value;
    filter(sVal);
    searchValue = sVal;
    onInputChange(sVal);

  }, 200);
}

//Search filter
let lastFilterTitle;
function filter(title) {
  if (lastFilterTitle !== title) {
    $w("#dataset1").setFilter(wixData.filter().contains("title", title));
    lastFilterTitle = title;
  }
}
// let lastFilterTitle;
// function filter(title) {
//   searchValue = title;
//   console.log(title, "search");
//   if (lastFilterTitle !== title) {
//     $w("#dataset1").setFilter(wixData.filter().contains("title", title));
//     lastFilterTitle = title;
//   }
// }

export function filterAssayType(event) {
  filterValue = event.target.value;
  onInputChange();
  if (event.target.value !== "All") {
    $w("#dataset1").setFilter(
      wixData.filter().contains("assayType", event.target.value)
    );
  } else {
    $w("#dataset1").setFilter(
      wixData.filter().isNotEmpty('assayType')
    );
  }
}

function onInputChange(title) {
  // console.log(wixData.filter().contains("title", title), 'inputchange');
  console.log(wixData.filter().contains("title", title).and(wixData.filter().isNotEmpty('assayType')));

  if (searchValue === '') {
    
  }else{
    $w("#dataset1").setFilter(wixData.filter().contains("title", title).and(wixData.filter().isNotEmpty('assayType')));

  }
}
