import wixData from "wix-data";


// iTitle is search box

// Builds an array from the "Title" field only from each item in
// the collection and then removes the duplicates
function getUniqueTitles(items) {
  // Use the map method to create the titlesOnly object containing all the titles from the query results
  const titlesOnly = items.map((item) => item.type);
  // Return an array with a list of unique titles
  return [...new Set(titlesOnly)];
}

// Creates an array of objects in the form {label: "label", value: "value"} from the array of titles
function buildOptions(uniqueList) {
  return uniqueList.map((curr) => {
    // Use the map method to build the options list in the format {label:uniqueTitle, value:uniqueTitle}
    return { label: curr, value: curr };
  });
}

function getAll() {
  console.log('getall')
  // Run a query that returns all the items in the collection
  wixData
    .query("Items")
    // Get the max possible results from the query
    .limit(1000)
    .find()
    .then((results) => {
      // Call the function that creates a list of unique titles
      const uniqueType = getUniqueTitles(results.items);
      // Call the function that builds the options list from the unique titles
      $w("#iType").options = buildOptions(uniqueType);
    });
}

$w.onReady(function () {
  getAll();
});

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
  if (lastFilterTitle !== title) {
    $w("#dataset1").setFilter(wixData.filter().contains("title", title));
    lastFilterTitle = title;
  }
}

export function filterAssayType(event) {
  if (event.target.value !== "All") {
    wixData
      .query("Items")
      // Get the max possible results from the query
      .limit(1000)
      .find()
      .then((results) => {
        console.log("reun", results);
        results.item.filter((item) => {
          if (item.assetType === event.target.value) {
            return item;
          }
        });
      });
  }else{
      getAll();
  }
}
