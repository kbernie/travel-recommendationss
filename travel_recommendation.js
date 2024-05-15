
function searchFunc() {
    let keyword = document.getElementById("search").value;
    console.log(keyword);
    console.log("button clicked");
    
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.countries[1].cities[1].name)
        })
        .catch(error => {
            console.error('Error:', error);
    });
}



/*
keywords:
-beaches
-temples
countries

+variations: beach, beaches, Beach, BEACH
*/
