
function searchFunc() {
    let keyword = document.getElementById("search").value.toLowerCase();
    let result = document.getElementById("result")
    document.getElementById("result").style.backgroundColor = "rgba(62, 158, 153, 0.5)"
    
    if(keyword === "beach") {
        keyword = "beaches";
    } else if(keyword === "temple") {
        keyword = "temples";
    } else if(keyword === "country") {
        keyword = "countries";
    }

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {

            if(keyword === "beaches" || keyword === "temples") {
                result.innerHTML = "";

                for (let city of data[keyword]) {
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
                        result.innerHTML += `<div class="results"><img src="${city.imageUrl}" width="100% height="250px"><br>
                        <h3>${city.name}</h3><br>
                        <p>${city.description}</p><br>
                        </div>`
                    }
                }
            } else if (keyword !== "beaches" || keyword !== "temples" || keyword !== "countries") {
                result.innerHTML = "";
                result.innerHTML += `<div><p>There is no result for this search term.</p></div>`
                
            }
        })
        .catch(error => {
            console.error('Error:', error);
    });
}

function clear(){
    let result = document.getElementById("result")
    result.innerHTML = "";
    result.style.backgroundColor = "";
    document.getElementById("search").value = "";
}

btnReset.addEventListener('click', clear);