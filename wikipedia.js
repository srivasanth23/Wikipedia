let SearchInput = document.getElementById("searchInput");
let Spinner = document.getElementById("spinner");
let SearchResults = document.getElementById("searchResults");
let PannelCreater = document.getElementById("pannelCreater");

function createAndAppendResults(data) {
    let {
        title,
        link,
        description
    } = data;

    //create a div Element
    let DivContainer = document.createElement("div");
    DivContainer.classList.add("result-item");
    SearchResults.appendChild(DivContainer);

    //create a href link Element
    let ResultTitle = document.createElement("a");
    ResultTitle.href = link;
    ResultTitle.target = "_blank";
    ResultTitle.textContent = title;
    ResultTitle.classList.add("result-title");
    DivContainer.appendChild(ResultTitle);

    //create a break element
    let BreakElemet = document.createElement("br");
    DivContainer.appendChild(BreakElemet);

    //create a url show element
    let UrlEl = document.createElement("a");
    UrlEl.href = link;
    UrlEl.target = "_blank";
    UrlEl.textContent = link;
    UrlEl.classList.add("result-url");
    DivContainer.appendChild(UrlEl);

    //create a break element
    let BreakElemetT = document.createElement("br");
    DivContainer.appendChild(BreakElemetT);

    //create a para element 
    let DescriptionElement = document.createElement("p");
    DescriptionElement.textContent = description;
    DescriptionElement.classList.add("link-description");
    DivContainer.appendChild(DescriptionElement);
}

function displayResults(searchResults) {
    Spinner.classList.add("d-none");
    for (let i of searchResults) {
        createAndAppendResults(i);
    }
}

function SearchWiki(event) {
    if (event.key === "Enter" && SearchInput.value === "") {
        alert("Enter valid Input");
    } else if (event.key === "Enter") {
        Spinner.classList.remove("d-none");
        PannelCreater.classList.add("d-none");
        SearchResults.textContent = "";

        let url = "https://apis.ccbp.in/wiki-search?search=" + SearchInput.value;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                let {
                    search_results
                } = result;
                displayResults(search_results);
            });
    }
}

SearchInput.addEventListener("keydown", SearchWiki);

let mainContainer = document.getElementById("mainContainer");
let Grey = document.getElementById("greyBackground");
let White = document.getElementById("whiteBackground");

Grey.onclick = function() {
    mainContainer.style.backgroundColor = "#403e3e";
    mainContainer.style.color = "white";
    PannelCreater.style.color = "white";
    SearchResults.style.backgroundColor = "white";
    SearchResults.style.borderRadius = "25px";

};

White.onclick = function() {
    mainContainer.style.backgroundColor = "White";
    mainContainer.style.color = "black";
    PannelCreater.style.color = "black";
    SearchResults.style.backgroundColor = "white";
}
