import wixData from "wix-data";



// Search field search
let debounceTimer;
let lastFilterTitle;

let searchBarValue;
let dropDownValue;



$w.onReady(function () {
    dropDownPopulate();
    searchBarValue = $w('#iTitle');
    dropDownValue = $w('#dropdown1');
});


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
    }
    if (searchValue === '' && filterValue !== 'All') {
        $w("#dataset1").setFilter(
            wixData.filter().contains("assayType", filterValue)
        );
    }
    if (searchValue !== '' && filterValue === 'All') {
        debounceTimer = setTimeout(() => {
            $w("#dataset1").setFilter(wixData.filter().contains("title", $w("#iTitle").value));
        }, 200);
    }
    if (searchValue !== '' && filterValue !== 'All') {
        debounceTimer = setTimeout(() => {
            $w("#dataset1").setFilter(wixData.filter().contains("title", $w("#iTitle").value).and(wixData.filter().contains("assayType", filterValue)));
        }, 200);
    }

}




function dropDownPopulate() {
    wixData
        .query("Items")
        .limit(1000)
        .find()
        .then((results) => {
            let dropDownOptions = [];
            let opts = dropDownValue.options;

            results.items.map((item)=>{
                if(!dropDownOptions.includes(item.assayType)){
                    dropDownOptions.push(item.assayType);
                    opts.push({"label": item.assayType, "value": item.assayType});
                }
            })
     
            dropDownValue.options = opts;
            
        });
}




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