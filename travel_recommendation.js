
function searchFunc() {
    let keyword = document.getElementById("search").value;
    let result = document.getElementById("result")
    document.getElementById("result").style.backgroundColor = "rgba(62, 158, 153, 0.5)"

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {

            if(keyword === "beaches" || keyword === "temples") {
                result.innerHTML = "";

                for (let city of data[keyword]) {
                    console.log(city.name) // city names
                    result.innerHTML += `<div class="results"><img src="${city.imageUrl}" width="100% height="250px"><br>
                    <h3>${city.name}</h3><br>
                    <p>${city.description}</p><br>
                    </div>`
                }
            } else if(keyword === "countries") {
                result.innerHTML = "";

                for (let x of data[keyword]) {
                    let cities = x.cities;
                    for (let city of cities) {
                        console.log(city.name) // city names
                        result.innerHTML += `<div class="results"><img src="${city.imageUrl}" width="100% height="250px"><br>
                        <h3>${city.name}</h3><br>
                        <p>${city.description}</p><br>
                        </div>`
                    }
                }
            }
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

