import wixData from "wix-data";

// iTitle is search box

// $w.onReady(function () {
//   wixData
//     .query("Items")
//     .limit(1000)
//     .find()
//     .then((results) => {
//         let optionsArray = [];
//         console.log('run')
//         console.log(results.items)
//         results.items.filter((item)=>{
//             console.log(item.assayType, 'foreach')
//             if(optionsArray.contains()){
//                 optionsArray.push(item.assayType);
//             }
//         })
//         return optionsArray;
//     //   const uniqueType = getUniqueTitles(results.items);
//     //   $w("#iType").options = buildOptions(uniqueType);
//     }).then((data)=>{
//         console.log(data);
//     });
// });

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
    filter($w("#iTitle").value);
  }, 200);
}

//Search filter
let lastFilterTitle;
function filter(title) {
  searchValue = title;
  console.log(title, "search");
  if (lastFilterTitle !== title) {
    $w("#dataset1").setFilter(wixData.filter().contains("title", title));
    lastFilterTitle = title;
  }
}

export function filterAssayType(event) {
  filterValue = event.target.value;
  console.log(filterValue, "filter");
  if (event.target.value !== "All") {
    $w("#dataset1").setFilter(
      wixData.filter().contains("assayType", event.target.value)
    );
  } else {
    console.log(wixData);
    $w("#dataset1").setFilter(
      wixData.filter()
    );
  }
}

// function onInputChange() {
//   let filterInputValue;
//   let searchInputValue;
//   if (filterValue !== "All") {
//     filterInputValue = wixData
//       .filter()
//       .contains("assayType", filterValue);
//   }
//   if(searchValue !== ''{
//     searchValue
//   })
// }
