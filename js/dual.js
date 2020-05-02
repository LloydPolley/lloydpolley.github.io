import wixData from "wix-data";



// Search field search
let debounceTimer;
let lastFilterTitle;

let searchBarValue = $w('#iTitle');
let dropDownValue = $w('#dropdown1');

export function iTitle_keyPress() {
    // searchHandler();
    onInputChange();
}

export function filterAssayType(event) {
    // filterHandler(event);
    onInputChange(event);
}


function onInputChange() {
    let searchValue = $w('#iTitle').value;
    let filterValue = $w('#dropdown1').value;

    if (debounceTimer) {
        clearTimeout(debounceTimer);
        debounceTimer = undefined;
    }

    if (searchValue === '' && filterValue === 'All') {
        $w("#dataset1").setFilter(
            wixData.filter().isNotEmpty('assayType')
        );
    } else if (searchValue === '' && filterValue !== 'All') {
        $w("#dataset1").setFilter(
            wixData.filter().contains("assayType", filterValue)
        );
    } else if (searchValue !== '' && filterValue === 'All') {
        debounceTimer = setTimeout(() => {
            $w("#dataset1").setFilter(wixData.filter().contains("title", $w("#iTitle").value));
        }, 200);
    } else if (searchValue !== '' && filterValue !== 'All') {
        debounceTimer = setTimeout(() => {
            $w("#dataset1").setFilter(wixData.filter().contains("title", $w("#iTitle").value).and(wixData.filter().contains("assayType", filterValue)));
        }, 200);
    }

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
            // const uniqueType = getUniqueTitles(results.items);
            console.log(results.items)
            let dropValuesAll = results.items.map((item)=>{
                return item.assayType;
            })
            const uniqueVals = new Set(dropValuesAll);
            const back = [...uniqueVals]

            let opts = dropDownValue.options;


            let backObj = back.map((backItem)=>{
                opts.push({"label": backItem, "value": backItem});
                // return {"label": backItem, "value": backItem}
            })

            dropDownValue.options = opts;
            
        });
}


$w.onReady(function () {
    getAll();
});



// function searchHandler() {
//     if (debounceTimer) {
//         clearTimeout(debounceTimer);
//         debounceTimer = undefined;
//     }
//     debounceTimer = setTimeout(() => {
//         $w("#dataset1").setFilter(wixData.filter().contains("title", $w("#iTitle").value));
//     }, 200);
// }

// function filterHandler(event) {
//     if (event.target.value !== "All") {
//         $w("#dataset1").setFilter(
//             wixData.filter().contains("assayType", event.target.value)
//         );
//     } else {
//         $w("#dataset1").setFilter(
//             wixData.filter().isNotEmpty('assayType')
//         );
//     }
// }